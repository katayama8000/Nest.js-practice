import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'denny', password: 'denny' },
    { id: 2, username: 'zedd', password: 'zedd' },
    { id: 3, username: 'qin', password: 'qin' },
    { id: 4, username: 'cat', password: 'cat' },
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
}
