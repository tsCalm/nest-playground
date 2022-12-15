import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from '../middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from '../middlewares/validate-expired.middlewares';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // apply에 전달한 미들웨어가 순서대로 동작
      .apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware)
      // * 전체 컨트롤러에 적용 및 특정 엔드포인트 제거 , 글로벌 prefix를 적용한 경우 path에 그대로 사용해야 동작함
      .exclude({ path: 'api/customers/create', method: RequestMethod.POST })
      .forRoutes(CustomersController);

    // * 개별적인 엔드포인트에 미들웨어를 적용
    // .forRoutes(
    // {
    //   path: 'customers/search/:id',
    //   method: RequestMethod.GET,
    // },
    // {
    //   path: 'customers/:id',
    //   method: RequestMethod.GET,
    // },
    // );
  }
}
