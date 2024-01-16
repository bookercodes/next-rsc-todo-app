'use client'

import { createTodoAction } from "./actions"
import { useRef } from "react";

export default function CreateTodoForm() {
    const ref = useRef()
    return <form action={async formData => {
        await createTodoAction(formData)
        ref.current.reset()
    }} ref={ref}>
        <input type="text" name="todoText"/>
        <input type="submit"/>
    </form>
}