export interface IPasswordHash {
    hashPassword(inputPassword: string): Promise<string>
    comparePassword(
        inputPassword: string,
        hashedPassword: string
    ): Promise<boolean>
}
