import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { jwtDTO } from './dtos/jwt.dot';
import jwtFunctions from './utils/jwt_token_generator.util';

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(req: jwtDTO, res: Response, next: NextFunction) {
    try {
      if (req.cookies.token) {
        const token = req.cookies.token;
        // eslint-disable-next-line prettier/prettier
        const tokensCredential: JwtPayload | string =
          jwtFunctions.jwtValidator(token);
        req.user = tokensCredential;

        next();
      } else {
        res.json({
          successful: false,
          message: 'you are not authorized to access this route',
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  }
}
