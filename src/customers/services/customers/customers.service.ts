import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'denny@gmail.com',
      name: 'Denny',
    },
    {
      id: 2,
      email: 'zedd@gamil.com',
      name: 'Zedd',
    },
    {
      id: 3,
      email: 'qin@gmail.com',
      name: 'Qin',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    const { email, name, id } = createCustomerDto;
    const customer = {
      id,
      email,
      name,
    };
    this.customers.push(customer);
  }
}
