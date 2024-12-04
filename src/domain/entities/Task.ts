import { EnumTaskStatus } from '../value-objects/EnumTaskStatus'
export type Task = {
    id: number
    title: string
    description?: string
    createdTime: string
    modifiedTime?: string
    userId?: number
    status?: EnumTaskStatus
}
