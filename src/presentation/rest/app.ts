import express from 'express'
import { UserRoutes } from './routes/UserRoutes'
const app = express()

export const rest = (PORT: number) => {
    app.use(express.json())
    app.use('/user', UserRoutes)
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
}
