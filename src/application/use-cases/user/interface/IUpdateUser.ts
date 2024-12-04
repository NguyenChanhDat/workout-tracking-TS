import { User } from "../../../../domain/entities/User";

export interface IUpdateUser {
    execute(userInfor: User): Promise<User>
}
