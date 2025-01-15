export interface IDeleteUser {
    executeById(id: number): Promise<number>
}
