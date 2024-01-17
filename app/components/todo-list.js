import TodoListItem  from './todo-item'

export default function TodoList ({ todos })  {
  return <ul>
    {todos.map(todo => <TodoListItem todo={todo} />)}
  </ul>
}