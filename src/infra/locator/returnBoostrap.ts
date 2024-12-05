import { BootstrapInMemory } from "../../presentation/bootstrap/BootstrapInMemory";
import { IBootstrap } from "../../presentation/bootstrap/IBootstrap";

export function returnBootstrap():IBootstrap{
    return new BootstrapInMemory()
}