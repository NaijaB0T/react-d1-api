import { Hono } from 'hono';

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
  const stmt = c.env.DB.prepare("SELECT * FROM comments LIMIT 3");
  const { results } = await stmt.all();
  return c.json(results);
});

export default app;
