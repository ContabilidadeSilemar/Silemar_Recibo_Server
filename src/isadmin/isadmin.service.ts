import { User } from './../user/entities/user.entity';
import { UserService } from './../user/user.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIsadminDto } from './dto/create-isadmin.dto';
import { UpdateIsadminDto } from './dto/update-isadmin.dto';

import {
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common/exceptions';

@Injectable()
export class IsadminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  // create(createIsadminDto: CreateIsadminDto) {
  //   return 'This action adds a new isadmin';
  // }

  // findAll() {
  //   return `This action returns all isadmin`;
  // }

  async findOne(id: string) {
    const user = await this.userService.findOne(id);
    return { isAdmin: user.isAdmin };
  }

  // update(id: number, updateIsadminDto: UpdateIsadminDto) {
  //   return `This action updates a #${id} isadmin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} isadmin`;
  // }

  handleError(error: Error): undefined {
    const errorLine = error.message?.split('\n');
    const lastErrorline = errorLine[errorLine.length - 1]?.trim();
    if (lastErrorline) {
      console.log(error);
    }
    throw new UnprocessableEntityException(
      lastErrorline || 'algum erro aconteceu ao executar a operação',
    );
  }
}
