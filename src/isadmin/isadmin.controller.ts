import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';
import { IsadminService } from './isadmin.service';

@ApiTags('isAdmin')
@Controller('isadmin')
export class IsadminController {
  constructor(private readonly isadminService: IsadminService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Retorna se o usuario informado é admin' })
  findOne(@Param('id') id: string) {
    return this.isadminService.findOne(id);
  }
}
