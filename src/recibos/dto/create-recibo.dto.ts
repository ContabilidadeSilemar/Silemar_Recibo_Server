import {
  IsPositive,
  IsNumber,
  IsString,
  IsNotEmpty,
  isArray,
  IsUUID,
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

  @ApiProperty({
    description: 'Numero do recibo:',
    example: '12',
  })
  @IsNotEmpty()
  number: number;
  @IsUUID()
  @ApiProperty({
    description: 'id de um usuario',
    example: '0ce7ec04-b005-4860-b449-1653adda34e9',
  })
  userId: string;
}
