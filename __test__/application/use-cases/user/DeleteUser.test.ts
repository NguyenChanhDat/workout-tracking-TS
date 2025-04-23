import { DeleteUser } from '../../../../src/application/use-cases/user/DeleteUser';
import { IUserServices } from '../../../../src/application/services/interfaces/IUserServices';

class MockUserServices implements IUserServices {
  getUserById = jest.fn();
  deleteEntity = jest.fn();
  createEntity = jest.fn();
  updateEntity = jest.fn();
  getUserByUsername = jest.fn();
  showListEntity = jest.fn();
}

describe('DeleteUser', () => {
  let deleteUser: DeleteUser;
  let mockUserServices: MockUserServices;

  beforeEach(() => {
    mockUserServices = new MockUserServices();
    deleteUser = new DeleteUser(mockUserServices);
  });

  it('should delete user by id if user exists', async () => {
    const userId = 1;
    mockUserServices.getUserById.mockResolvedValue({ id: userId });
    mockUserServices.deleteEntity.mockResolvedValue(undefined);

    const result = await deleteUser.executeById(userId);

    expect(result).toBe(userId);
    expect(mockUserServices.getUserById).toHaveBeenCalledWith(userId);
    expect(mockUserServices.deleteEntity).toHaveBeenCalledWith(userId);
  });

  it('should throw an error if user does not exist', async () => {
    const userId = 1;
    mockUserServices.getUserById.mockResolvedValue(null);

    await expect(deleteUser.executeById(userId)).rejects.toThrow(Error);
    expect(mockUserServices.getUserById).toHaveBeenCalledWith(userId);
    expect(mockUserServices.deleteEntity).not.toHaveBeenCalled();
  });
});
