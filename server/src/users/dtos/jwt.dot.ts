import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface jwtDTO extends Request {
  user?: string | JwtPayload;
}
