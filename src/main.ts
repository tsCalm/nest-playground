import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  /**
   * 글로벌로 미들웨어를 설정하는 방법
   * 보통 세션과 패스포 트 설정에 많이 사용
   * app.use(미들웨어명)
   */

  await app.listen(3000);
}
bootstrap();
