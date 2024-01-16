'use server'

import { revalidatePath } from 'next/cache'
import { createTodo, deleteAllTodos } from './db'

export async function createTodoAction(formData) {
    const todoText = formData.get("todoText")
    await createTodo(todoText)
    revalidatePath("/")
}

export async function deleteAllTodosAction() {
    await deleteAllTodos()
    revalidatePath("/")
}