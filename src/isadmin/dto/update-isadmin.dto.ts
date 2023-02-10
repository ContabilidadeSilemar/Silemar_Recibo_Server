import { PartialType } from '@nestjs/swagger';
import { CreateIsadminDto } from './create-isadmin.dto';

export class UpdateIsadminDto extends PartialType(CreateIsadminDto) {}
