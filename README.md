# Todo: API and frontend

Time cap: 90 minutes, including reading this brief.

## Goal

Build a todo app: a Koa API and a React frontend that consumes it.

## Tasks

1. API (Koa), in `api/`:
   - `GET /todos`, `POST /todos`, `PATCH /todos/:id`, `DELETE /todos/:id`
   - Store todos in memory.
   - Cache the `GET /todos` response while the process runs. Invalidate it on writes.
2. Web (React), in `web/`:
   - Start in JavaScript. Convert to TypeScript if you choose.
   - Use hooks for state and data fetching.
   - List, add, toggle complete, and delete todos.
3. Tests: Vitest, in `api/test/`. Cover the routes and at least one frontend unit.
4. Improve what you see fit. Record trade-offs in `NOTES.md`.

## Setup

```bash
npm install --prefix api
npm install --prefix web
npm start --prefix api
npm run dev --prefix web
npm test --prefix api
```

Claude and references are permitted. Write the code yourself.
