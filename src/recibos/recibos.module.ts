import { Module } from '@nestjs/common';
import { RecibosService } from './recibos.service';
import { RecibosController } from './recibos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [RecibosController],
  providers: [RecibosService],
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class RecibosModule {}
