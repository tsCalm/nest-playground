import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FileSyncController } from './file.sync.ctrl';
import { TimingMiddleware } from './TimingMiddleware';

@Module({
  imports: [],
  controllers: [FileSyncController],
  providers: [],
})
export class FileSyncModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TimingMiddleware).forRoutes('*');
  }
}
