import { Injectable } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'test1',
      password: '123',
    },
    {
      username: 'test2',
      password: '123',
    },
    {
      username: 'test3',
      password: '123',
    },
    {
      username: 'test4 ',
      password: '123',
    },
  ];

  getUsers() {
    //plainToInstance : 리터럴 객체를 클래스로 변경시켜줌, ex) plainToInstance(SerializedUser, user)
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
