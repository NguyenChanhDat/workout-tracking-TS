import { CreateUserDto } from '../../application/dto/user/createUserDto'
import { User } from '../entities/User'
import { EntityRepository } from './EntityRepository'
import { UpdateUserDto } from '../../application/dto/user/updateUserDto'

export interface IUserRepository extends EntityRepository<User> {
    getEntityById(id: number): Promise<User>
    getByUsername(username: string): Promise<User>
    showListEntity(): Promise<User[]>
    createEntity(entity: CreateUserDto): Promise<User>
    updateEntity(user: User, inforInput: UpdateUserDto): Promise<User>
    deleteEntity(user: User): Promise<void>
}
