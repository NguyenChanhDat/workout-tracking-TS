import express from 'express'
import { UserRoutes } from './routes/UserRoutes'
import { TaskRoutes } from './routes/TaskRoutes'
const app = express()

export const rest = (PORT: number) => {
    app.use(express.json())
    app.use('/user', UserRoutes)
    app.use('/task', TaskRoutes)
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
}
