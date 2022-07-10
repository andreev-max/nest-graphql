import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

const getIdFromCtx = (ctx: ExecutionContext): string | undefined =>
  GqlExecutionContext.create(ctx).getContext().req.url;

export const Id = createParamDecorator((_, ctx: ExecutionContext): string => {
  const id = getIdFromCtx(ctx);
  return id.slice(1);
});
