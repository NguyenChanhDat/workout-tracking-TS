import { User } from '../entities/User'
import { EntityRepository } from './EntityRepository'

export interface IUserRepository extends EntityRepository<User> {
    getByUsername(username: string): Promise<User|null>
}
