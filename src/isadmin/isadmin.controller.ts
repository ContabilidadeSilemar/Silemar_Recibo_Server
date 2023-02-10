import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IsadminService } from './isadmin.service';
import { CreateIsadminDto } from './dto/create-isadmin.dto';
import { UpdateIsadminDto } from './dto/update-isadmin.dto';

@Controller('isadmin')
export class IsadminController {
  constructor(private readonly isadminService: IsadminService) {}

  // @Post()
  // create(@Body() createIsadminDto: CreateIsadminDto) {
  //   return this.isadminService.create(createIsadminDto);
  // }

  // @Get()
  // findAll() {
  //   return this.isadminService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.isadminService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIsadminDto: UpdateIsadminDto) {
  //   return this.isadminService.update(+id, updateIsadminDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.isadminService.remove(+id);
  // }
}
