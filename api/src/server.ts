import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

// TODO: GET /todos (cached while the process runs)
// TODO: POST /todos
// TODO: PATCH /todos/:id
// TODO: DELETE /todos/:id
// TODO: invalidate the GET cache on every write

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3030;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`API on :${port}`));
}

export default app;
