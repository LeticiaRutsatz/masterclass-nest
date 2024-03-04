import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CustomersRepository } from "../customers-repository";
import { randomUUID } from "node:crypto";

@Injectable()
export class PrismaCustomersRepository implements CustomersRepository{
    constructor(private prisma: PrismaService){}

    async create(name: string, customerFunction: string): Promise<void> {
        await this.prisma.customer.create({
            data: {
                id: randomUUID(),
                name,
                function: customerFunction
            }
        })
    }
}