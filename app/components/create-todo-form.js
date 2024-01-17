'use client'

import { createTodoAction } from "../actions"
import { useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" disabled={pending}>
        Add
      </button>
    );
  }

export default function CreateTodoForm() {
    const ref = useRef()
    const initialState = { message: "" }
    const [state, formAction] = useFormState(createTodoAction, initialState)

    return <form action={async formData => {
        await formAction(formData)
        ref.current.reset()
    }} ref={ref}>
        <input type="text" name="todoText"/>
        <SubmitButton/>
        {state.message}
    </form>
}