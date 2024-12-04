import { CreateUser, DeleteUser, GetUser, ICreateUser, IDeleteUser, IGetUser, IUpdateUser, UpdateUser } from "../../application/use-cases/user/UserUseCaseExportDir";

export function returnGetUser():IGetUser{
    return new GetUser()
}

export function returnCreateUser():ICreateUser{
    return new CreateUser()
}

export function returnDeleteUser():IDeleteUser{
    return new DeleteUser()
}

export function returnUpdateUser():IUpdateUser{
    return new UpdateUser()
}