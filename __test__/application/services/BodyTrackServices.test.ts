import { BodyTrackServices } from '@application/services/BodyTrackServices';
import { IBodyTrackRepository } from '@domain/repositories/IBodyTrackRepository';
import { CreateBodyTrackDto } from '@application/dto/bodyTrack/CreateBodyTrackDto';
import { UpdateBodyTrackDto } from '@application/dto/bodyTrack/UpdateBodyTrackDto';
// import { BodyTrack } from '@domain/entities/BodyTrack';

class MockBodyTrackRepository implements IBodyTrackRepository {
  createEntity = jest.fn();
  updateEntity = jest.fn();
  deleteEntity = jest.fn();
  showListEntity = jest.fn();
  getEntityById = jest.fn();
}

describe('BodyTrackServices', () => {
  let bodyTrackServices: BodyTrackServices;
  let mockBodyTrackRepository: MockBodyTrackRepository;

  beforeEach(() => {
    mockBodyTrackRepository = new MockBodyTrackRepository();
    bodyTrackServices = new BodyTrackServices(mockBodyTrackRepository);
  });

  it('should create a new body track', async () => {
    const bodyTrackInput: CreateBodyTrackDto = {
      weight: 70.2,
      height: 175.2,
      userId: 1,
      date: new Date(),
    };
    await bodyTrackServices.createEntity(bodyTrackInput);

    expect(mockBodyTrackRepository.createEntity).toHaveBeenCalledWith(
      bodyTrackInput
    );
  });

  it('should update an existing body track', async () => {
    const bodyTrackId = 1;
    const updateInfo: UpdateBodyTrackDto = {
      id: bodyTrackId,
      weight: 75,
      height: 180,
      date: new Date(),
    };
    await bodyTrackServices.updateEntity(bodyTrackId, updateInfo);

    expect(mockBodyTrackRepository.updateEntity).toHaveBeenCalledWith(
      bodyTrackId,
      updateInfo
    );
  });

  //   it('should delete a body track by id', async () => {
  //     const bodyTrackId = 1;
  //     await bodyTrackServices.deleteEntity(bodyTrackId);

  //     expect(mockBodyTrackRepository.deleteEntity).toHaveBeenCalledWith(
  //       bodyTrackId
  //     );
  //   });

  //   it('should get a body track by id', async () => {
  //     const bodyTrackId = 1;
  //     const bodyTrack: BodyTrack = {
  //       id: bodyTrackId,
  //       weight: 70,
  //       height: 175,
  //       date: new Date(),
  //     };
  //     mockBodyTrackRepository.getEntityById.mockResolvedValue(bodyTrack);

  //     const result = await bodyTrackServices.getEntityById(bodyTrackId);

  //     expect(result).toEqual(bodyTrack);
  //     expect(mockBodyTrackRepository.getEntityById).toHaveBeenCalledWith(
  //       bodyTrackId
  //     );
  //   });

  //   it('should return null if body track does not exist', async () => {
  //     const bodyTrackId = 1;
  //     mockBodyTrackRepository.getEntityById.mockResolvedValue(null);

  //     const result = await bodyTrackServices.getEntityById(bodyTrackId);

  //     expect(result).toBeNull();
  //     expect(mockBodyTrackRepository.getEntityById).toHaveBeenCalledWith(
  //       bodyTrackId
  //     );
  //   });

  //   it('should show list of body tracks', async () => {
  //     const bodyTracks: BodyTrack[] = [
  //       {
  //         id: 1,
  //         weight: 70,
  //         height: 175,
  //         date: new Date(),
  //       },
  //       {
  //         id: 2,
  //         weight: 75,
  //         height: 180,
  //         date: new Date(),
  //       },
  //     ];
  //     mockBodyTrackRepository.showListEntity.mockResolvedValue(bodyTracks);

  //     const result = await bodyTrackServices.showListEntity();

  //     expect(result).toEqual(bodyTracks);
  //     expect(mockBodyTrackRepository.showListEntity).toHaveBeenCalled();
  //   });
});
