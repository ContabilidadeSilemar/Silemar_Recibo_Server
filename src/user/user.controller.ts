import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  @ApiOperation({
    summary: 'Create a new user.',
  })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('')
  @ApiOperation({
    summary: 'Only Admin - List all users.',
  })
  findAll(user: User) {
    return this.userService.findAll(user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Only Admin - Find one user by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Only Admin - Delete user by ID.',
  })
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  // @Get('details/my-account')
  // @UseGuards(AuthGuard())
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Info of the logged account.',
  // })
  // myAccount(@LoggedUser() user: User) {
  //   return this.userService.myAccount(user.id);
  // }

  @Patch('update/:id')
  @ApiOperation({
    summary: 'Edit data from logged account.',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  // @Delete('delete/my-account')
  // @UseGuards(AuthGuard())
  // @ApiBearerAuth()
  // @ApiOperation({
  //   summary: 'Delete logged account.',
  // })
  // delete(@LoggedUser() user: User) {
  //   return this.userService.delete(user.id);
  // }
}
