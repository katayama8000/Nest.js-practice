import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    console.log('Inside AuthService.validateUser()');
    const userDB = await this.userService.findUserByUsername(email);
    if (userDB) {
      const isMatched = comparePassword(password, userDB.password);
      if (isMatched) {
        console.log('成功: ', userDB);
        return userDB;
      } else {
        console.log('パスワードが違います');
        return null;
      }
    } else {
      console.log('失敗');
      return null;
    }
  }
}
