import { Suspense } from "react"
export const Error = () => {
    return <Suspense fallback={<div>Загрузка...</div>}><p>NotFound page</p></Suspense>
}