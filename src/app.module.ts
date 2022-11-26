import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecibosModule } from './recibos/recibos.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [PrismaModule, RecibosModule, EmpresasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
