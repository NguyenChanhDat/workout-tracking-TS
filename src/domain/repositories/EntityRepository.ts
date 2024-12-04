export interface EntityRepository<Entity> {
    getEntityById(id: number): Promise<Entity | null>
    showListEntity(): Promise<Entity[] | null>
    createEntity(entity: Partial<Entity>): Promise<Entity>
    updateEntity(
        entityById: Entity,
        updateInfor: Partial<Entity>
    ): Promise<Entity>
    deleteEntity(entity: Entity): Promise<void>
}
