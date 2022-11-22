import { Inject, Injectable } from '@nestjs/common';
import { IArticle, IArticleService, IRepository } from './interface';
import { ARTICLE_SERVICE_TOKEN } from './constant';

@Injectable()
export class ArticleService implements IArticleService {
  constructor(
    @Inject(ARTICLE_SERVICE_TOKEN)
    private readonly repository: IRepository<IArticle>,
  ) {}
  async getArticle(id: number): Promise<IArticle> {
    return this.repository.get(id);
  }
  async getArticleLength(id: number): Promise<number> {
    const article = await this.repository.get(id);
    return article.body.length;
  }
}
