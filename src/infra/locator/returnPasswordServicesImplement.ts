import { IPasswordServices } from "../../application/services/IPasswordServices";
import { PasswordServices } from "../../application/services/PasswordServices";

export function returnPasswordServicesImplement():IPasswordServices{
    return new PasswordServices()
}