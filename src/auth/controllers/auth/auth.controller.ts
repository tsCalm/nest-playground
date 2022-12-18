import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthenticateGuard, LocalGuard } from 'src/auth/utils/localGuard';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalGuard)
  async login() {
    return null;
  }

  @Get('')
  getAuthSession(@Session() session: Record<string, any>) {
    console.log(session.id);
    session.authenticated = true;
    return session;
  }

  @Get('status')
  @UseGuards(AuthenticateGuard)
  async getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
