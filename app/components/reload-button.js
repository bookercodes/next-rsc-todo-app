'use client'

import { useRouter } from 'next/navigation'

export default function ReloadButton () {
    const router = useRouter() 
    return <button onClick={() => { router.refresh() }}>Reload</button>
}