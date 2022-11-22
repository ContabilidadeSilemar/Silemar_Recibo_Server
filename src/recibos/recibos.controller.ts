import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecibosService } from './recibos.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Recibo')
@Controller('recibos')
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Post()
  @ApiOperation({ summary: 'Emitir novo recibo' })
  create(@Body() createReciboDto: CreateReciboDto) {
    return this.recibosService.create(createReciboDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar todos os recibos' })
  findAll() {
    return this.recibosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um recibo pelo seu Id' })
  findOne(@Param('id') id: string) {
    return this.recibosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar um recibo pelo seu Id' })
  update(@Param('id') id: string, @Body() updateReciboDto: UpdateReciboDto) {
    return this.recibosService.update(id, updateReciboDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Apagar um recibo pelo seu Id' })
  remove(@Param('id') id: string) {
    return this.recibosService.remove(id);
  }
}
