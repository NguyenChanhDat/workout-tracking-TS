export interface IBootstrap {
    dataSourceIsInitialized(): Promise<boolean>
    initialize(): Promise<void>
}
