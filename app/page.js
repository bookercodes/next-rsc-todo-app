import Image from 'next/image'
import styles from './page.module.css'

import { fetchTodos } from './db'
import CreateTodoForm from './components/create-todo-form'
import ReloadButton from './components/reload-button'
import DeleteAllButton from './components/delete-all-button'
import TodoList  from './components/todo-list'


export default async function Home() {
  const todos = await fetchTodos()
  console.log(todos)
  return <>
    <div>
      <h1>Todoly</h1>
      <p>Welcome, Alex.</p>
    </div>
    <div>
      <ReloadButton />
      <DeleteAllButton />
    </div>
    <div>
      <TodoList todos={todos}/>
    </div>
    <CreateTodoForm />
  </>
}
