import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'test1@terst.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'test2@terst.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'test3@terst.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'test4@terst.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
