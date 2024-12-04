import { TaskApiStatus } from './ApiStatus'

export class NoTaskIdError extends Error {
    status: number
    override message: string
    constructor() {
        super()
        this.status = TaskApiStatus.NOT_FOUND.status
        this.message = 'Object not contain TaskId'
    }
}
