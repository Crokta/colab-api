import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlCtx = context.getArgByIndex(2);
    const request = gqlCtx.req;
    const token = this.extractToken(request);

    request['profile'] = await this.validateRequest(token);
    return true;
  }

  private async validateRequest(token: string) {
    if (!token) {
      throw new UnauthorizedException('Not authorized');
    }

    try {
      return await this.jwt.verifyAsync(token, {
        publicKey: process.env.JWT_PUBLIC_KEY,
        algorithms: ['RS256'],
      });
    } catch (error) {
      throw new UnauthorizedException('Not authorized');
    }
  }

  extractToken(request: Request): string | undefined {
    const authorization = request.headers.authorization;
    if (!authorization) {
      throw new UnauthorizedException('Not authorized');
    }
    const [bearer, token] = authorization?.split(' ');
    if (bearer !== 'Bearer') {
      throw new UnauthorizedException('Not authorized');
    }
    return token;
  }
}
