export interface EntityRepository<Entity> {
    getEntityById(id: number): Promise<Entity | null>
    showListEntity(): Promise<Entity[] | null>
    createEntity(entity: Partial<Entity>): Promise<void>
    updateEntity(
        entityId: number,
        updateInfor: Partial<Entity>
    ): Promise<void>
    deleteEntity(entityId: number): Promise<void>
}
