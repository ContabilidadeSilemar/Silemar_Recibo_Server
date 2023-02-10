import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecibosModule } from './recibos/recibos.module';
import { EmpresasModule } from './empresas/empresas.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { IsadminModule } from './isadmin/isadmin.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    RecibosModule,
    EmpresasModule,
    PessoasModule,
    IsadminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
