import {
  Controller,
  Get,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    //return 'login';
  }

  @Get('session')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session, 111111111111);
    session.authenticated = true;
    console.log(session.authenticated, 2222222222);
    return session;
  }
}
