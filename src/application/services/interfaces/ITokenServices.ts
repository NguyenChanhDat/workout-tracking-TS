export interface ITokenServices {
  generateToken(input: {
    username: string;
    password: string;
  }): Promise<string | undefined>;
  verifyToken(token: string): Promise<string | null>;
}
