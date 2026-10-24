import { describe, it } from 'vitest';

describe('todos API', () => {
  it.todo('GET /todos returns the list');
  it.todo('POST /todos creates a todo');
  it.todo('PATCH /todos/:id updates a todo and invalidates the cache');
  it.todo('DELETE /todos/:id removes a todo and invalidates the cache');
});
