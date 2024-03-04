export abstract class CustomersRepository {
    abstract create(name: string, customerFunction: string): Promise<void>;
}