import { TaskApiStatus } from './ApiStatus'

export class NoUserIdError extends Error {
    status: number
    override message: string
    constructor() {
        super()
        this.status = TaskApiStatus.NOT_FOUND.status
        this.message = 'Object not contain UserId'
    }
}
