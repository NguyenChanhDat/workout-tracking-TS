export interface ILogin {
  returnToken(input: {
    username: string;
    password: string;
  }): Promise<string | undefined>;
}
