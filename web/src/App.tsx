// 1. Создать список
// 2. Add для добавления ел. в список
// 3. Button, отвечает за статус  
// 4. Button, котор  отвечает за удаление
// 5. API GET 
// 6. POST и сохранение даных на сервере

import { useState, useEffect } from 'react'

type Driver = { id: number, title: string, is_completed: boolean }
type Drivers = Driver[]

export default function App() {
  const DATA: Drivers = [
    { id: 1, title: 'John', is_completed: false },
    { id: 2, title: 'Ann', is_completed: false }
  ]
  // TODO: fetch /todos with hooks
  // TODO: add, toggle complete, delete
  const [todos, setToDos] = useState(DATA)

  useEffect(() => {
    console.log('data', todos);
  }, [todos])

  const onDelete = (id) => {
    const res = todos.filter(todo => (todo.id !== id))
    setToDos(res)
  }

  const setStatus = (id) => {
    const res = todos.map((s) => {
      if (s.id === id) {
        s.is_completed = !s.is_completed
      }
      return s
    })
    setToDos(res)
  }

  return (
    <main>
      <h1>Todos</h1>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type='checkbox' value={item.is_completed} onChange={() => setStatus(item.id)} />
            {item.title}
            <button onClick={() => onDelete(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </main>
  );
}