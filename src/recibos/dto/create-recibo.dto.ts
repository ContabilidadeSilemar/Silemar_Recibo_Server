import { IsPositive, IsNumber, IsString, IsNotEmpty } from 'class-validator';
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
    example: 'Honorario Referente ao mes de Janeiro',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty({
    description: 'Valores a serem cobrados:',
    example: '1000, 2000',
  })
  @IsString()
  @IsNotEmpty()
  amount: string;
  @ApiProperty({
    description: 'Valor total a ser pago do recibo :',
    example: '3000',
  })
  @IsString()
  @IsNotEmpty()
  total_amount: string;
  @ApiProperty({
    description: 'Nome do Emitente:',
    example: 'Fulano',
  })
  @IsString()
  @IsNotEmpty()
  issuer: string;
}
