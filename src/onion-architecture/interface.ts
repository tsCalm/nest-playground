export interface IArticle {
  id: number;
  body: string;
  title: string;
}

export interface IRepository<T> {
  get(id: number): Promise<T>;
  delete(id: number): Promise<void>;
  save(input: T): Promise<T>;
  update(input: T): Promise<T>;
}

export interface IArticleService {
  getArticle(id: number): Promise<IArticle>;
  getArticleLength(id: number): Promise<number>;
}
