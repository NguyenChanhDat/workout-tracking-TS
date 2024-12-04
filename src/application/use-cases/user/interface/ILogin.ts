export interface ILogin {
    validatePassword(username: string, inputPassword: string): Promise<boolean>
}
