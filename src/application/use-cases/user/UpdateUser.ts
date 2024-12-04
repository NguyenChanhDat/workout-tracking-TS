import { User } from '../../../domain/entities/User'
import { PasswordServices } from '../../services/PasswordServices'
import { IPasswordServices } from '../../services/IPasswordServices'
import { IUserServices } from '../../services/IUserServices'

export class UpdateUser {
    constructor(
        private readonly userServices: IUserServices,
        private readonly passwordServices: IPasswordServices
    ) {}
    private returnPasswordHashed = async (
        passwordInput: string
    ): Promise<string> => {
        return await this.passwordServices.hashPassword(passwordInput)
    }
    public execute = async (inforInput: User): Promise<User> => {
        const userById = await this.userServices.getUserById(inforInput.id)
        if (!userById) {
            throw new Error()
        }
        const userByIdNonNull: User = userById
        inforInput.password = await this.returnPasswordHashed(
            inforInput.password
        )
        const userUpdated = await this.userServices.updateEntity(
            userByIdNonNull,
            inforInput
        )
        return userUpdated
    }
}
