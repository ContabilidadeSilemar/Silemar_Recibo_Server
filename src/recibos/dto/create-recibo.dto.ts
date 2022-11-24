import {
  IsPositive,
  IsNumber,
  IsString,
  IsNotEmpty,
  isArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReciboDto {
  @ApiProperty({
    description: 'Nome da Empresa:',
    example: 'Fulano Org',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'Cpf ou Cnpj da empresa ou pessoa::',
    example: '11122233344',
  })
  @IsString()
  @IsNotEmpty()
  doc: string;

  @ApiProperty({
    description: 'Descrição dos pagamentos:',
    example: ['Honorario Referente ao mes de Janeiro', 'teste honorario'],
  })
  @IsNotEmpty({ each: false })
  description: string[];

  @ApiProperty({
    description: 'Valores a serem cobrados:',
    example: [1000, 2000],
  })
  @IsNotEmpty({ each: false })
  amount: number[];

  @ApiProperty({
    description: 'Nome do Emitente:',
    example: 'Fulano',
  })
  @IsString()
  @IsNotEmpty()
  issuer: string;
}
