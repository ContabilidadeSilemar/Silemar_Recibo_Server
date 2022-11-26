import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpresaDto {
  @ApiProperty({
    description: 'bairro da empresa',
    example: 'centro',
  })
  bairro: string;

  @ApiProperty({
    description: 'cep da cidade',
    example: '84430-000',
  })
  cep: string;

  @ApiProperty({
    description: 'codigo cenae da empresa',
    example: '7364938',
  })
  cnaePrincipalCodigo: string;

  @ApiProperty({
    description: 'descição do  cenae da empresa',
    example: 'atividades de contabilidade',
  })
  cnaePrincipalDescricao: string;

  @ApiProperty({
    description: 'cnpj da empresa ',
    example: '18.463.374/95083-74',
  })
  cnpj: string;

  @ApiProperty({
    description: 'complemento da localização da empresa',
    example: 'salão vermelho de teto preto e piso azul',
  })
  complemento: string;

  @ApiProperty({
    description: 'data de abertura da empresa ',
    example: '25/03/2015',
  })
  dataAbertura: string;

  @ApiProperty({
    description: 'ddd do telefone da empresa ',
    example: '42',
  })
  ddd: string;

  @ApiProperty({
    description: 'email da empresa ',
    example: 'contato@contabilidadesilemar.com.br',
  })
  email: string;

  @ApiProperty({
    description: 'nome da rua da empresa ',
    example: 'Rua. capitão edson graeser',
  })
  logradouro: string;

  @ApiProperty({
    description: 'cidade da onde a empresa é sediada ',
    example: 'imbituva',
  })
  municipio: string;

  @ApiProperty({
    description: 'nome fantasia da empresa ',
    example: 'escritorio silemar ',
  })
  nomeFantasia: string;

  @ApiProperty({
    description: 'numero do edificio|local da emprpesa ',
    example: '187',
  })
  numero: string;

  @ApiProperty({
    description: 'nome social da empresa',
    example: 'machado e machado assessoria empresarial LTDA',
  })
  razaoSocial: string;

  @ApiProperty({
    description: 'status da empresa ',
    example: 'ativa',
  })
  status: string;

  @ApiProperty({
    description: 'telefone da empresa ',
    example: '34361715',
  })
  telefone: string;

  @ApiProperty({
    description: 'tipo da logradouro',
    example: 'Rua',
  })
  tipoLogradouro: string;

  @ApiProperty({
    description: 'estado onde a empresa esta estabelecida',
    example: 'pr',
  })
  uf: string;
}
