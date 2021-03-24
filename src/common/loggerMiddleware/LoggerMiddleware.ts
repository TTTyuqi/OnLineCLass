import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction): any {

    console.log('Request...',req.method);
    // console.log('Response...',res.send);
    next();
  }

}