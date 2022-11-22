import { Controller, Get, Param } from '@nestjs/common';
import { IArticle, IArticleService } from './interface';

@Controller({ path: 'article' })
export class ArticleController {
  constructor(private readonly service: IArticleService) {}

  @Get(':id')
  async article(@Param() params): Promise<IArticle> {
    return this.service.getArticle(params.id);
  }
}
