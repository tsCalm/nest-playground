import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    const userDB = await this.userService.findUserByEmail(email);
    if (!userDB || userDB.password !== password) return null;
    return userDB;
  }
}
