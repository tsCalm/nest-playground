import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':username')
  // service, controller에서 plainToInstance 메서드를 사용하는 것과 같으나,
  // nestJs에서 아래 데코레이터를 사용할 것을 권장한다.
  @UseInterceptors(ClassSerializerInterceptor)
  getUsersByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    /**
     *
     */
    return new SerializedUser(user);
  }
}
