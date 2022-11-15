import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {
  private users: User[] = [
    { username: 'denny', password: 'denny' },
    { username: 'zedd', password: 'zedd' },
    { username: 'qin', password: 'qin' },
    { username: 'cat', password: 'cat' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUsersByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
