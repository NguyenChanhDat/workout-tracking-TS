import { IExerciseRepository } from '../../../../domain/repositories/IExerciseRepository';
import { Exercise } from '../../../../domain/entities/Exercise';
import { ExercisesModel } from '@infra/databases/models/ExercisesModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';
import { UpdateExerciseDto } from '@application/dto/exercise/UpdateExerciseDto';

export class ExerciseTypeOrmRepository implements IExerciseRepository {
  constructor(
    private readonly repository: Repository<Exercise> = appDataSource.getRepository(
      ExercisesModel
    )
  ) {}

  async createEntity(exercise: Exercise): Promise<void> {
    await this.repository.save(exercise);
  }

  async updateEntity(exerciseId: number, exercise: Exercise): Promise<void> {
    const { id, ...rest } = exercise;
    const updateInfor: Omit<UpdateExerciseDto, 'id'> = rest;
    await this.repository.update(exerciseId, updateInfor);
  }

  async deleteEntity(exerciseId: number): Promise<void> {
    await this.repository.delete(exerciseId);
  }

  async getEntityById(exerciseId: number): Promise<Exercise | null> {
    const exercise = await this.repository.findOne({
      where: { id: exerciseId },
    });
    return exercise;
  }

  async showListEntity(): Promise<Exercise[] | null> {
    return await this.repository.find();
  }
}
