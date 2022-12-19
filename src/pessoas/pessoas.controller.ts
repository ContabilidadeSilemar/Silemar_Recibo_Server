import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pessoas')
@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @Post()
  @ApiOperation({
    summary: 'Register a new person.',
  })
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoasService.create(createPessoaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all person.',
  })
  findAll() {
    return this.pessoasService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Search person by id.',
  })
  findOne(@Param('id') id: string) {
    return this.pessoasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit person by id.',
  })
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoasService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Report person by id.',
  })
  remove(@Param('id') id: string) {
    return this.pessoasService.remove(id);
  }
}
