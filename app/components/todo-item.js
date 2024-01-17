'use client'

import { toggleTodoDoneAction } from "../actions"

export default function TodoListItem({ todo }) {
    return <li key={todo.id} style={{ display: 'flex' }}>
        <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodoDoneAction(todo.id)} />
        {todo.text}
    </li>
}