import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';
import { Recibo } from './entities/recibo.entity';
import { UnprocessableEntityException } from '@nestjs/common/exceptions';

@Injectable()
export class RecibosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReciboDto: CreateReciboDto) {
    const recibo: Recibo | any = { ...createReciboDto };
    let total = 0;
    recibo.amount.forEach((element) => (total = total + element));

    recibo.total_amount = `${total}`;
    console.log(total);

    return this.prisma.recibo.create({ data: recibo }).catch(this.handleError);
  }

  findAll() {
    return this.prisma.recibo.findMany();
  }

  async findOne(id: string): Promise<Recibo> {
    const record: Recibo | any = await this.prisma.recibo.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro com id: ${id} Não encontrado`);
    }

    return record;
  }

  async update(id: string, updateReciboDto: UpdateReciboDto) {
    await this.findOne(id);
    const data: Partial<Recibo | any> = { ...updateReciboDto };
    this.prisma.recibo.update({ data, where: { id } }).catch(this.handleError);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.recibo.delete({ where: { id } });
  }

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
