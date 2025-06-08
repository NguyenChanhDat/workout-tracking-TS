import { ITokenServices } from '@application/services/interfaces/ITokenServices';
import { TOKEN_EXPIRE_DATE } from '@presentation/rest/constants/token';
import { config } from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';
config({ path: '.env' });

export class JWT implements ITokenServices {
  constructor(
    private readonly tokenSecret: string = process.env.TOKEN_SECRET || ''
  ) {}
  public generateToken = async (input: {
    username: string;
    password: string;
  }): Promise<string | undefined> => {
    return jwt.sign({ data: input }, this.tokenSecret, {
      expiresIn: TOKEN_EXPIRE_DATE,
    });
  };

  public verifyToken = async (
    tokenExtracted: string
  ): Promise<string | JwtPayload> => {
    const decoded = jwt.verify(tokenExtracted, this.tokenSecret);
    return decoded;
  };
}
