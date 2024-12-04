import { IPasswordServices } from '../../services/IPasswordServices'
import { ILogin } from './interface/ILogin'
import { IUserServices } from '../../services/IUserServices'

export class LoginServices implements ILogin {
    constructor(
        private readonly userServices: IUserServices,
        private readonly passwordServices: IPasswordServices
    ) {}

    private getUserPasswordByUsername = async (
        username: string
    ): Promise<string> => {
        try {
            const userByUsername =
                await this.userServices.getUserByUsername(username)
            return userByUsername?.password || ''
        } catch (error) {
            console.log(error)
            throw new Error()
        }
    }

    public validatePassword = async (
        username: string,
        inputPassword: string
    ): Promise<boolean> => {
        try {
            const userPassword = await this.getUserPasswordByUsername(username)
            const compareResult = this.passwordServices.validatePassword(
                inputPassword,
                userPassword
            )
            return compareResult
        } catch (error) {
            console.log(error)
            throw new Error()
        }
    }
}
