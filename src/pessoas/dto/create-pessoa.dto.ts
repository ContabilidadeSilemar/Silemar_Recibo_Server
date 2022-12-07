import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Fulano',
  })
  nome: string;

  @ApiProperty({
    description: 'Cpf do cliente',
    example: '11122233344',
  })
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento do cliente',
    example: '10011875',
  })
  dataNascimento: string;
}
