import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateCustomerBody } from './dtos/create-customer-body';
import { CustomersRepository } from './repositories/customers-repository';

@Controller('app')
export class AppController {
  constructor(private customersRepository : CustomersRepository) {}

  @Post('customer') //the route will be app/customer
  async createCustomer(body: CreateCustomerBody) {
    const {name, function: customerFunction} = body;

    await this.customersRepository.create(name, customerFunction);
  }
}
