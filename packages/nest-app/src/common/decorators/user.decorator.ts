import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetHeader = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const headers = request.headers;
    return data ? headers?.[data] : headers;
  },
);
