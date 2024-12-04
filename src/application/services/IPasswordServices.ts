export interface IPasswordServices {
    hashPassword(inputPassword: string): Promise<string>
    validatePassword(
        inputPassword: string,
        hashedPassword: string
    ): Promise<boolean>
}
