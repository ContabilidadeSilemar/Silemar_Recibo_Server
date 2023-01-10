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
    let data2: any = { ...createEmpresaDto };
    let data: any = {
      bairro: data2.BAIRRO,
      cep: data2.CEP,
      cnaePrincipalCodigo: data2['CNAE PRINCIPAL CODIGO'],
      cnaePrincipalDescricao: data2['CNAE PRINCIPAL DESCRICAO'],
      cnpj: data2.CNPJ,
      complemento: data2.COMPLEMENTO,
      dataAbertura: data2['DATA ABERTURA'],
      ddd: data2.DDD,
      email: data2.EMAIL,
      logradouro: data2.LOGRADOURO,
      municipio: data2.MUNICIPIO,
      nomeFantasia: data2['NOME FANTASIA'],
      numero: data2.NUMERO,
      razaoSocial: data2['RAZAO SOCIAL'],
      status: data2.STATUS,
      telefone: data2.TELEFONE,
      tipoLogradouro: data2['TIPO LOGRADOURO'],
      uf: data2.UF,
    };

    if (data.bairro == undefined) {
      return this.prisma.empresas
        .create({ data: data2 })
        .catch(this.handleError);
    } else this.prisma.empresas.create({ data }).catch(this.handleError);
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
