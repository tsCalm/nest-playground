import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { CustomersService } from '../../services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private cusService: CustomersService) {}

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.cusService.findCustomerById(id);
    if (!customer) res.status(400).send({ msg: 'Customer not found' });
    res.send(customer);
  }

  @Get('search/:id')
  searchCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.cusService.findCustomerById(id);
    if (!customer)
      throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
    return customer;
  }

  @Get('')
  getCustomers() {
    return this.cusService.getCustomers();
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.cusService.createCustomer(createCustomerDto);
  }
}
