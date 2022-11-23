import { PartialType } from '@nestjs/swagger';
import { CreateReciboDto } from './create-recibo.dto';

export class UpdateReciboDto extends PartialType(CreateReciboDto) {}
