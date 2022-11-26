import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnprocessableEntityException } from '@nestjs/common/exceptions';
import { Empresa } from './entities/empresa.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class EmpresasService {
  constructor(private readonly prisma: PrismaService) {}
  create(createEmpresaDto: CreateEmpresaDto) {
    let data: Empresa = { ...createEmpresaDto };
    return this.prisma.empresas.create({ data }).catch(this.handleError);
  }

  findAll() {
    return this.prisma.empresas.findMany();
  }

  async findOne(id: string) {
    const record: Empresa = await this.prisma.empresas.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro com id: ${id} Não encontrado`);
    }
    return record;
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    await this.findOne(id);
    const data: Partial<Empresa> = { ...updateEmpresaDto };
    await this.prisma.empresas
      .update({ data, where: { id } })
      .catch(this.handleError);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.empresas.delete({ where: { id } });
  }
  handleError(error: Error): undefined {
    console.log(
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      error,
    );
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
