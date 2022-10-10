import Router from '@koa/router';

export const router = new Router();

router.get(['/', '/health', '/check'], ctx => {
  ctx.status = 200;
  ctx.body = 'OK';
});
