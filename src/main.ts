import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as os from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      name: 'NEST_SESSION',
      secret: 'test-sesstion-secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.enableCors();
  app.use(passport.initialize());
  app.use(passport.session());
  /**
   * 글로벌로 미들웨어를 설정하는 방법
   * 보통 세션과 패스포 트 설정에 많이 사용
   * app.use(미들웨어명)
   */

  await app.listen(3000).then(() => {
    os.cpus();
  });
}
bootstrap();
