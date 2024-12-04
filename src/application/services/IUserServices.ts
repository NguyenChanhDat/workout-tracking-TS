import { CreateUserDto } from '../dto/user/createUserDto'
import { UpdateUserDto } from '../dto/user/updateUserDto'
import { User } from '../../domain/entities/User'

export interface IUserServices {
    createEntity(user: CreateUserDto): Promise<User>
    updateEntity(user: User, updateInfo: UpdateUserDto): Promise<User>
    deleteEntity(user: User): Promise<void>
    getUserById(userId: number): Promise<User | null>
    getUserByUsername(username: string): Promise<User | null>
    showListEntity(): Promise<User[] | null>
}
