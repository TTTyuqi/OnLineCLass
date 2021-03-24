import { Catch, ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFIlter implements  ExceptionFilter<HttpException>{
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    console.log("exception",exception);
    const exceptionRes:any = exception.getResponse()
    const {
      error,
      message
    } = exceptionRes
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
        message
      });
  }
  
}