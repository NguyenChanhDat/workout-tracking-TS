import { User } from '../entities/User'
import { EntityRepository } from './EntityRepository'

export interface IUserRepository extends EntityRepository<User> {
    // getEntityById(id: number): Promise<User|null>
    getByUsername(username: string): Promise<User|null>
    // showListEntity(): Promise<User[]|null>
    // createEntity(entity: CreateUserDto): Promise<void>
    // updateEntity(userId: number, inforInput: UpdateUserDto): Promise<void>
    // deleteEntity(userId: number): Promise<void>
}
