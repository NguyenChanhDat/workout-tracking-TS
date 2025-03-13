import { ExerciseServices } from '@application/services/ExerciseServices';
import { IExerciseRepository } from '@domain/repositories/IExerciseRepository';
import { CreateExerciseDto } from '@application/dto/exercise/CreateExerciseDto';
import { UpdateExerciseDto } from '@application/dto/exercise/UpdateExerciseDto';
// import { Exercise } from '@domain/entities/Exercise';

class MockExerciseRepository implements IExerciseRepository {
  createEntity = jest.fn();
  updateEntity = jest.fn();
  deleteEntity = jest.fn();
  showListEntity = jest.fn();
  getEntityById = jest.fn();
}

describe('ExerciseServices', () => {
  let exerciseServices: ExerciseServices;
  let mockExerciseRepository: MockExerciseRepository;

  beforeEach(() => {
    mockExerciseRepository = new MockExerciseRepository();
    exerciseServices = new ExerciseServices(mockExerciseRepository);
  });

  it('should create a new exercise', async () => {
    const exerciseInput: CreateExerciseDto = {
      name: 'Push Up',
    };
    await exerciseServices.createEntity(exerciseInput);

    expect(mockExerciseRepository.createEntity).toHaveBeenCalledWith(
      exerciseInput
    );
  });

  it('should update an existing exercise', async () => {
    const exerciseId = 1;
    const updateInfo: UpdateExerciseDto = {
      id: exerciseId,
      name: 'Pull Up',
    };
    await exerciseServices.updateEntity(exerciseId, updateInfo);

    expect(mockExerciseRepository.updateEntity).toHaveBeenCalledWith(
      exerciseId,
      updateInfo
    );
  });

  //   it('should delete an exercise by id', async () => {
  //     const exerciseId = 1;
  //     await exerciseServices.deleteEntity(exerciseId);

  //     expect(mockExerciseRepository.deleteEntity).toHaveBeenCalledWith(
  //       exerciseId
  //     );
  //   });

  //   it('should get an exercise by id', async () => {
  //     const exerciseId = 1;
  //     const exercise: Exercise = {
  //       id: exerciseId,
  //       name: 'Push Up',
  //       description: 'A basic push up exercise',
  //     };
  //     mockExerciseRepository.getEntityById.mockResolvedValue(exercise);

  //     const result = await exerciseServices.getEntityById(exerciseId);

  //     expect(result).toEqual(exercise);
  //     expect(mockExerciseRepository.getEntityById).toHaveBeenCalledWith(
  //       exerciseId
  //     );
  //   });

  //   it('should return null if exercise does not exist', async () => {
  //     const exerciseId = 1;
  //     mockExerciseRepository.getEntityById.mockResolvedValue(null);

  //     const result = await exerciseServices.getEntityById(exerciseId);

  //     expect(result).toBeNull();
  //     expect(mockExerciseRepository.getEntityById).toHaveBeenCalledWith(
  //       exerciseId
  //     );
  //   });

  //   it('should show list of exercises', async () => {
  //     const exercises: Exercise[] = [
  //       {
  //         id: 1,
  //         name: 'Push Up',
  //         description: 'A basic push up exercise',
  //       },
  //       {
  //         id: 2,
  //         name: 'Pull Up',
  //         description: 'A basic pull up exercise',
  //       },
  //     ];
  //     mockExerciseRepository.showListEntity.mockResolvedValue(exercises);

  //     const result = await exerciseServices.showListEntity();

  //     expect(result).toEqual(exercises);
  //     expect(mockExerciseRepository.showListEntity).toHaveBeenCalled();
  //   });
});
