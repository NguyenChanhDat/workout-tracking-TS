import { SetServices } from '@application/services/SetServices';
import { ISetRepository } from '@domain/repositories/ISetRepository';
import { CreateSetDto } from '@application/dto/set/CreateSetDto';
import { UpdateSetDto } from '@application/dto/set/UpdateSetDto';
// import { Set } from '@domain/entities/Set';

class MockSetRepository implements ISetRepository {
  createEntity = jest.fn();
  updateEntity = jest.fn();
  deleteEntity = jest.fn();
  getEntityById = jest.fn();
  showListEntity = jest.fn();
  getExerciseBySessionId = jest.fn();
  getAllByUserId = jest.fn();
}

describe('SetServices', () => {
  let setServices: SetServices;
  let mockSetRepository: MockSetRepository;

  beforeEach(() => {
    mockSetRepository = new MockSetRepository();
    setServices = new SetServices(mockSetRepository);
  });

  it('should create a new set', async () => {
    const setInput: CreateSetDto = {
      sessionId: 1,
      exerciseId: 1,
      weight: 50,
      reps: 12,
      restTime: 30,
    };
    await setServices.createEntity(setInput);

    expect(mockSetRepository.createEntity).toHaveBeenCalledWith(setInput);
  });

  it('should update an existing set', async () => {
    const setId = 1;
    const updateInfo: UpdateSetDto = {
      exerciseId: 1,
      weight: 50,
      reps: 12,
      restTime: 30,
    };
    await setServices.updateEntity(setId, updateInfo);

    expect(mockSetRepository.updateEntity).toHaveBeenCalledWith(
      setId,
      updateInfo
    );
  });

  //   it('should delete a set by id', async () => {
  //     const setId = 1;
  //     await setServices.deleteEntity(setId);

  //     expect(mockSetRepository.deleteEntity).toHaveBeenCalledWith(setId);
  //   });

  //   it('should get a set by id', async () => {
  //     const setId = 1;
  //     const set: Set = {
  //       id: setId,
  //       exerciseId: 1,
  //       weight: 50,
  //       reps: 10,
  //       restTime: 60,
  //     };
  //     mockSetRepository.getEntityById.mockResolvedValue(set);

  //     const result = await setServices.getEntityById(setId);

  //     expect(result).toEqual(set);
  //     expect(mockSetRepository.getEntityById).toHaveBeenCalledWith(setId);
  //   });

  //   it('should return null if set does not exist', async () => {
  //     const setId = 1;
  //     mockSetRepository.getEntityById.mockResolvedValue(null);

  //     const result = await setServices.getEntityById(setId);

  //     expect(result).toBeNull();
  //     expect(mockSetRepository.getEntityById).toHaveBeenCalledWith(setId);
  //   });

  //   it('should show list of sets', async () => {
  //     const sets: Set[] = [
  //       {
  //         id: 1,
  //         exerciseId: 1,
  //         weight: 50,
  //         reps: 10,
  //         restTime: 60,
  //       },
  //       {
  //         id: 2,
  //         exerciseId: 2,
  //         weight: 60,
  //         reps: 8,
  //         restTime: 90,
  //       },
  //     ];
  //     mockSetRepository.showListEntity.mockResolvedValue(sets);

  //     const result = await setServices.showListEntity();

  //     expect(result).toEqual(sets);
  //     expect(mockSetRepository.showListEntity).toHaveBeenCalled();
  //   });
});
