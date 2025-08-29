import { LoginResponseDto } from '@application/dto/user/loginDto';
import { RoleEnum } from '@shared/enums/RoleEnum';
export interface ILogin {
  returnResult(
    input: {
      username: string;
      password: string;
    },
    role: RoleEnum
  ): Promise<LoginResponseDto>;
}
