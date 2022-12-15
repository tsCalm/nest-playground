import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from '../../types';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  private users: User[] = [
    {
      id: 1,
      username: 'test1',
      password: '123',
    },
    { id: 2, username: 'test2', password: '123' },
    { id: 3, username: 'test3', password: '123' },
    { id: 4, username: 'test4 ', password: '123' },
  ];

  getUsers() {
    //plainToInstance : 리터럴 객체를 클래스로 변경시켜줌, ex) plainToInstance(SerializedUser, user)
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepo.create(createUserDto);
    return this.userRepo.save(newUser);
  }
}
