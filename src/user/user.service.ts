import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './entities/user.entity';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { isAdmin } from 'src/utils/admin';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    email: true,
    password: false,
    cpf: true,
    isAdmin: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais.');
    }

    delete dto.confirmPassword;

    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };

    return this.prisma.user
      .create({ data, select: this.userSelect })
      .catch(handleError);
  }

  /////////////////////////////////////////////////// ADMIN

  async findAll(user: User) {
    const list = await this.prisma.user.findMany({
      select: this.userSelect,
    });

    if (list.length === 0) {
      throw new NotFoundException(
        'Não existem usuários cadastrados ainda, gostaria de ser o primeiro?',
      );
    }
    return list;
  }

  async findOne(id: string) {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    notFoundError(record, id);
    return record;
  }

  async deleteUser(id: string) {
    // isAdmin(user);
    await this.findOne(id);

    await this.prisma.user.delete({
      where: { id },
    });
    const data = {
      success: true,
      message: 'User deleted successfully',
    };
    return data;
  }

  ///////////////////////////  MY ACCOUNT
  async myAccount(userId: string) {
    const record = await this.prisma.user.findUnique({
      where: { id: userId },
      select: this.userSelect,
    });

    return record;
  }

  async update(id, dto: UpdateUserDto) {
    await this.myAccount(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não são iguais.');
      }
    }

    delete dto.confirmPassword;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user
      .update({
        where: { id: id },
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async delete(userId: string) {
    await this.myAccount(userId);

    await this.prisma.user.delete({
      where: { id: userId },
    });
    const data = {
      success: true,
      message: 'User deleted successfully',
    };
    return data;
  }
}
