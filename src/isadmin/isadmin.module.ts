import { UserModule } from './../user/user.module';
import { UserService } from './../user/user.service';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { IsadminService } from './isadmin.service';
import { IsadminController } from './isadmin.controller';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [IsadminController],
  providers: [IsadminService],
  exports: [IsadminService],
})
export class IsadminModule {}
