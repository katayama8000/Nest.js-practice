import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      usernameField: 'username',
    });
  }

  async validate(email: string, password: string) {
    console.log('Inside LocalStrategy.validate()');
    console.log(email, password);
    const user = await this.authService.validateUser(email, password);
    console.log(user, 'user');
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
