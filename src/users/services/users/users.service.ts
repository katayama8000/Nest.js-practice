import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { SerializedUser, User } from '../../types';
import { User as UserEntity } from '../../../typeorm';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [
    // { id: 1, username: 'denny', password: 'denny' },
    // { id: 2, username: 'zedd', password: 'zedd' },
    // { id: 3, username: 'qin', password: 'qin' },
    // { id: 4, username: 'cat', password: 'cat' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    console.log('createUserDto: ', createUserDto);
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }
}
