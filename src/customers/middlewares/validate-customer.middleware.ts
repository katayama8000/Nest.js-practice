import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(403).send({ error: 'No Authentication' });
    next();
  }
}
