import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

const getTokenFromCtx = (ctx: ExecutionContext): string | undefined =>
  GqlExecutionContext.create(ctx).getContext().req.get('authorization');

export const Token = createParamDecorator(
  (_, ctx: ExecutionContext): string => {
    const token = getTokenFromCtx(ctx);
    return token.includes('Bearer') ? token : `Bearer ${token}`;
  },
);
