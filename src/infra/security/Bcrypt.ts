import { IPasswordHash } from '@application/interfaces/IPasswordHash';
import { compare, genSalt, hash } from 'bcrypt';

export class Bcrypt implements IPasswordHash {
  constructor(
    public readonly saltRound = parseInt(process.env.SALT_ROUNDS as string)
  ) {}

  private async genSalt() {
    return await genSalt(this.saltRound);
  }
  public async hashPassword(inputPassword: string) {
    const salt = await this.genSalt();
    const passwordHashed = await hash(inputPassword, salt);
    return passwordHashed;
  }
  public async comparePassword(inputPassword: string, hashedPassword: string) {
    const compareResult: boolean = await compare(inputPassword, hashedPassword);
    return compareResult;
  }
}
