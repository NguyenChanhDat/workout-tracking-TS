import { CreateUserDto } from '../../application/dto/user/createUserDto'
import { User } from '../entities/User'
import { EntityRepository } from './EntityRepository'
import { UpdateUserDto } from '../../application/dto/user/updateUserDto'

export interface IUserRepository extends EntityRepository<User> {
    getEntityById(id: number): Promise<User|null>
    getByUsername(username: string): Promise<User|null>
    showListEntity(): Promise<User[]|null>
    createEntity(entity: CreateUserDto): Promise<void>
    updateEntity(userId: number, inforInput: UpdateUserDto): Promise<void>
    deleteEntity(userId: number): Promise<void>
}
