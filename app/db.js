import { JSONFilePreset } from 'lowdb/node'

const defaultData = { 
    todos: ['eat cake','dance'] 
}

export async function fetchTodos() {
    const db = await JSONFilePreset('db.json', defaultData)
    const todos = db.data.todos
    return todos
}

export async function createTodo(todoText) {
    const db = await JSONFilePreset('db.json', defaultData)

    db.data.todos.push(todoText)
    await db.write()
}

export async function deleteAllTodos() {
    const db = await JSONFilePreset('db.json', defaultData)
    
    db.data.todos = []
    await db.write()
}
