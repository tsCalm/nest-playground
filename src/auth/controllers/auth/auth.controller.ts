import { Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login() {
    return null;
  }

  @Get('')
  getAuthSession(@Session() session: Record<string, any>) {
    console.log(session.id);
    session.authenticated = true;
    return session;
  }
}
