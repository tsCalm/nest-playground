import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * @Catch의 파라메터는 HttpException 유형의 에러만 캐치해서 처리하겠다는 의미이다
 * 기존에 HttpException에 관한 클래스를 따로 만들어서 처리했지만 이제는
 * Nest에서 권장하는 @UseFilter를 사용하여 처리하여 공수를 줄이는게 좋을거같다.
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const req = context.getRequest<Request>();
    const res = context.getResponse<Response>();

    res.status(exception.getStatus()).send({
      statusCode: exception.getStatus(),
      message: exception.getResponse(),
    });
  }
}
