import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    const userDB = await this.userService.findUserByEmail(email);
    if (!userDB) return null;
    const matched = comparePassword(password, userDB.password);
    if (!matched) return null;
    return userDB;
  }
}
