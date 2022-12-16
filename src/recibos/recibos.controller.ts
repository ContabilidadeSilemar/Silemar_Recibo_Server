import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RecibosService } from './recibos.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common/enums';

@ApiTags('Recibo')
@Controller('recibos')
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Issue a new receipt.' })
  create(@Body() createReciboDto: CreateReciboDto) {
    return this.recibosService.create(createReciboDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all receipts.' })
  findAll() {
    return this.recibosService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Search for a receipt by id.' })
  findOne(@Param('id') id: string) {
    return this.recibosService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Change a receipt by id.' })
  update(@Param('id') id: string, @Body() updateReciboDto: UpdateReciboDto) {
    return this.recibosService.update(id, updateReciboDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a receipt by id.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.recibosService.remove(id);
  }
}
