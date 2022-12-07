import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecibosModule } from './recibos/recibos.module';
import { EmpresasModule } from './empresas/empresas.module';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [PrismaModule, RecibosModule, EmpresasModule, PessoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
