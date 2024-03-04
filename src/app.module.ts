import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CustomersRepository } from './repositories/customers-repository';
import { PrismaCustomersRepository } from './repositories/prisma/prisma-customers-repository';
//import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: CustomersRepository,
      useClass: PrismaCustomersRepository
    }
  ],
})
export class AppModule {}
