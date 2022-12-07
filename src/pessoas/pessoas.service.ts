import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnprocessableEntityException } from '@nestjs/common/exceptions';
import { Pessoa } from './entities/pessoa.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class PessoasService {
  constructor(private readonly prisma: PrismaService) {}
  create(CreatePessoaDto: CreatePessoaDto) {
    let data: Pessoa = { ...CreatePessoaDto };
    return this.prisma.pessoas.create({ data }).catch(this.handleError);
  }

  findAll() {
    return this.prisma.pessoas.findMany();
  }

  async findOne(id: string) {
    const record: Pessoa = await this.prisma.pessoas.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro com id: ${id} Não encontrado`);
    }
    return record;
  }

  async update(id: string, updatePessoaDto: UpdatePessoaDto) {
    await this.findOne(id);
    const data: Partial<Pessoa> = { ...updatePessoaDto };
    await this.prisma.pessoas
      .update({ data, where: { id } })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.pessoas.delete({ where: { id } });
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
