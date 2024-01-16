'use client'

import { deleteAllTodosAction } from "./actions" 

export default function DeleteAllButton () { 
      return <form onSubmit={async e => {
        e.preventDefault()
        if (confirm()) {
            await deleteAllTodosAction()
        }
      }}>
        <input type="submit"value="Delete all" />
      </form>
}