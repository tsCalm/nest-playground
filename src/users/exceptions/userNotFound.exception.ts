import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(
    msg: string = 'User not found',
    status: number = HttpStatus.BAD_REQUEST,
  ) {
    super(msg, status);
  }
}
