import { JSONFilePreset } from 'lowdb/node'
import { randomUUID } from 'crypto'

const defaultData = { 
    todos: []
}

export async function fetchTodos() {
    const db = await JSONFilePreset('db.json', defaultData)
    const todos = db.data.todos
    return todos
}

export async function createTodo(todoText) {
    const db = await JSONFilePreset('db.json', defaultData)

    db.data.todos.push({ 
        id: randomUUID(),
        text: todoText,
        done: false
    })
    await db.write()
}

export async function deleteAllTodos() {
    const db = await JSONFilePreset('db.json', defaultData)
    
    db.data.todos = []
    await db.write()
}


export async function toggleTodoDone(id) {
    const db = await JSONFilePreset('db.json', defaultData)
    const todo = db.data.todos.find(todo => todo.id === id)
    todo.done = !todo.done
    await db.write()
}