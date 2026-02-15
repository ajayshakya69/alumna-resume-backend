import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { EXTERNAL_CALL_NOT_ALLOWED } from './guards.constants';
import axios from 'axios';
import { RequestDto } from '../dtos/request.dto';

@Injectable()
export class InternalCallGuard implements CanActivate {
  constructor() {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const xSecret = request.headers['x-secret'];

    if (xSecret !== process.env.X_SECRET) {
      throw new UnauthorizedException(EXTERNAL_CALL_NOT_ALLOWED);
    }

    return true;
  }
}

@Injectable()
export class SSOAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RequestDto = context.switchToHttp().getRequest();

    const authHeader = (request as any).headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Missing or invalid Authorization header',
      );
    }

    const token = authHeader.split(' ')[1];

    try {
      const response = await axios.get(
        `${process.env.SSO_URL}/oauth2/userinfo`, // e.g. https://sso.example.com/oauth/userinfo
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // Attach user info to request
      request.user = response?.data?.data;

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
