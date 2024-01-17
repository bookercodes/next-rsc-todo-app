'use server'

import { revalidatePath } from 'next/cache'
import { createTodo, deleteAllTodos, toggleTodoDone } from './db'

export async function createTodoAction(prevState, formData) {
    console.log("prevState", prevState)
    console.log("formData", formData)

    const todoText = formData.get("todoText")

    if (todoText === "") {
        return { message: 'Text cannot be empty.' }
    }

    await createTodo(todoText)
    revalidatePath("/")
    return { message: 'Added todo' }
}

export async function deleteAllTodosAction() {
    await deleteAllTodos()
    revalidatePath("/")
}

export async function toggleTodoDoneAction(id)  {
    await toggleTodoDone(id)
    revalidatePath("/")
}