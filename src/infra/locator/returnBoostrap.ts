import { BootstrapTypeOrm } from "../databases/dataSource/BootstrapTypeOrm";
import { IBootstrap } from "../../presentation/bootstrap/IBootstrap";

export function returnBootstrap():IBootstrap{
    return new BootstrapTypeOrm()
}