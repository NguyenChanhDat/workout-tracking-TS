import { CreateUserDto } from '../dto/user/createUserDto'
import { UpdateUserDto } from '../dto/user/updateUserDto'
import { IUserServices } from './IUserServices'
import { User } from '../../domain/entities/User'
import { IUserRepository } from '../../domain/repositories/IUserRepository'

export class UserServices implements IUserServices {
    constructor(
        private readonly userRepository: IUserRepository
    ) {}

    public createEntity = async (userInput: CreateUserDto): Promise<User> => {
        const userCreated: User =
            await this.userRepository.createEntity(userInput)
        return userCreated
    }

    public updateEntity = async (
        user: User,
        updateInfo: UpdateUserDto
    ): Promise<User> => {
        return await this.userRepository.updateEntity(user, updateInfo)
    }

    public deleteEntity = async (user: User): Promise<void> => {
        await this.userRepository.deleteEntity(user)
        return Promise.resolve()
    }

    public getUserById = async (userId: number): Promise<User | null> => {
        const userById: User | null =
            await this.userRepository.getEntityById(userId)
        return userById
    }
    public getUserByUsername(username: string): Promise<User | null> {
        const userByUsername: Promise<User | null> =
            this.userRepository.getByUsername(username)
        return userByUsername
    }

    public showListEntity = async (): Promise<User[] | null> => {
        const userList: User[] | null =
            await this.userRepository.showListEntity()
        return userList
    }
}
