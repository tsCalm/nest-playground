import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass, plainToInstance } from 'class-transformer';
import { SerializedUser, User } from '../../types';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { encodePassword } from 'src/utils/bcrypt';
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

  /**
   * 튜토리얼 강의에서는 service에서 유저 비밀번호를 바꾸지만 내 생각에는 엔티티의 beforeInsert를 활용해서
   * 유저의 패스워드가 존재한다면 encodePassword 함수를 호출하는게 맞다고 생각한다.
   * 백엔드에서는 유저의 패스워드 원본값을 볼 일이 없기 때문에 패스워드 값이 존재하면 해쉬처리를 해주는게 안전하다고 생각한다.
   * @param createUserDto
   * @returns
   */
  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepo.create({ ...createUserDto, password });
    return this.userRepo.save(newUser);
  }

  findUserByEmail(email: string) {
    return this.userRepo.findOne({
      where: {
        email,
      },
    });
  }
}
