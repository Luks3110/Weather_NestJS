import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// Middleware that is used to check whenever the /GET endpoint is called
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('GET /weather');
    next();
  }
}
