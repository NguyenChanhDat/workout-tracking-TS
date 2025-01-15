import { CreateUserDto } from '../../../dto/user/createUserDto'
export interface ICreateUser {
    execute(inputInfor: CreateUserDto): Promise<CreateUserDto>
}
