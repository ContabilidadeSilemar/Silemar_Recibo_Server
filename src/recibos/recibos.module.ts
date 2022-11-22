import { Module } from '@nestjs/common';
import { RecibosService } from './recibos.service';
import { RecibosController } from './recibos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RecibosController],
  providers: [RecibosService],
  imports: [PrismaModule],
})
export class RecibosModule {}
