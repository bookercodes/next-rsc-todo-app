import Image from 'next/image'
import styles from './page.module.css'

import { fetchTodos } from './db'
import CreateTodoForm from './create-todo'
import ReloadButton from './reload-button'
import DeleteAllButton from './delete-all-button'

export default async function Home() {
  const todos = await fetchTodos()
  console.log(todos)
  return <>
    <div>
      <h1>Todos</h1>
    </div>
    <div>
      <ReloadButton />
      <DeleteAllButton />
    </div>
    <div>
      {JSON.stringify(todos)}
    </div>
    <CreateTodoForm />
  </>
}
