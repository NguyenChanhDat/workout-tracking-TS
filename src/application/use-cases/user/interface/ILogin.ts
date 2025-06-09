import { LoginResponseDto } from '@application/dto/user/loginDto';
export interface ILogin {
  returnResult(input: {
    username: string;
    password: string;
  }): Promise<LoginResponseDto>;
}
