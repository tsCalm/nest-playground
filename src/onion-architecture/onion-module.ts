import { Module } from '@nestjs/common';
import { ArticleController } from './onion-ctrl';
import { ArticleService } from './onion-service';
import { ARTICLE_SERVICE_TOKEN } from './constant';

@Module({
  controllers: [ArticleController],
  providers: [
    {
      provide: ARTICLE_SERVICE_TOKEN,
      useClass: ArticleService,
    },
  ],
})
export class ArticleModule {}
