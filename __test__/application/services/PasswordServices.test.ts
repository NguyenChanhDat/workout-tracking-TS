import { PasswordServices } from '../../../src/application/services/PasswordServices';
import { IPasswordHash } from '../../../src/application/interfaces/IPasswordHash';

class MockPasswordHash implements IPasswordHash {
  hashPassword = jest.fn();
  comparePassword = jest.fn();
}

describe('PasswordServices', () => {
  let passwordServices: PasswordServices;
  let mockPasswordHash: MockPasswordHash;

  beforeEach(() => {
    mockPasswordHash = new MockPasswordHash();
    passwordServices = new PasswordServices(mockPasswordHash);
  });

  it('should hash a password', async () => {
    const password = 'password';
    const hashedPassword = 'hashedPassword';
    mockPasswordHash.hashPassword.mockResolvedValue(hashedPassword);

    const result = await passwordServices.hashPassword(password);

    expect(result).toBe(hashedPassword);
    expect(mockPasswordHash.hashPassword).toHaveBeenCalledWith(password);
  });

  it('should compare a password with a hashed password', async () => {
    const password = 'password';
    const hashedPassword = 'hashedPassword';
    mockPasswordHash.comparePassword.mockResolvedValue(true);

    const result = await passwordServices.validatePassword(
      password,
      hashedPassword
    );

    expect(result).toBe(true);
    expect(mockPasswordHash.comparePassword).toHaveBeenCalledWith(
      password,
      hashedPassword
    );
  });
});
