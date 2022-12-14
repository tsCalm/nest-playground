import { Injectable } from '@nestjs/common';
import { Customer } from '../../types/customer';
import { CreateCustomerDto } from '../../dtos/createCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'test1@terst.com',
      name: 'testName1',
    },
    {
      id: 2,
      email: 'test2@terst.com',
      name: 'testName2',
    },
    {
      id: 3,
      email: 'test3@terst.com',
      name: 'testName3',
    },
    {
      id: 4,
      email: 'test4@terst.com',
      name: 'testName4',
    },
  ];
  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
