import { IExerciseRepository } from '../../../../domain/repositories/IExerciseRepository';
import { Exercise } from '../../../../domain/entities/Exercise';
import { ExerciseModel } from '@infra/databases/models/ExerciseModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class ExerciseTypeOrmRepository implements IExerciseRepository {
  async createEntity(exercise: Exercise): Promise<void> {
    await appDataSource.getRepository(ExerciseModel).save(exercise);
  }

  async updateEntity(
    exerciseId: number,
    exercise: Partial<Exercise>
  ): Promise<void> {
    await appDataSource
      .getRepository(ExerciseModel)
      .update(exerciseId, exercise);
  }

  async deleteEntity(exerciseId: number): Promise<void> {
    await appDataSource.getRepository(ExerciseModel).delete(exerciseId);
  }

  async getEntityById(exerciseId: number): Promise<Exercise | null> {
    const exercise = await appDataSource
      .getRepository(ExerciseModel)
      .findOne({ where: { id: exerciseId } });
    return exercise;
  }

  async showListEntity(): Promise<Exercise[] | null> {
    return await appDataSource.getRepository(ExerciseModel).find();
  }
}
