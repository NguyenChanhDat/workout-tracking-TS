import { UserApiStatus } from './ApiStatus'

export class UserNotFoundError extends Error {
    status: number
    override message: string
    constructor() {
        super()
        this.status = UserApiStatus.NOT_FOUND.status
        this.message = UserApiStatus.NOT_FOUND.message
    }
}
