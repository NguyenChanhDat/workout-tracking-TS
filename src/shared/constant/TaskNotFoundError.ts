import { TaskApiStatus } from './ApiStatus'

export class TaskNotFoundError extends Error {
    status: number
    override message: string
    constructor() {
        super()
        this.status = TaskApiStatus.NOT_FOUND.status
        this.message = TaskApiStatus.NOT_FOUND.message
    }
}
