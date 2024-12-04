import { User } from "../../../../domain/entities/User"
import { CreateUserDto } from '../../../dto/user/createUserDto'
export interface ICreateUser {
    execute(inputInfor: CreateUserDto): Promise<User>
}
