import { Set } from '../../../../domain/entities/Set';
import { GetAllByUserIdResponseDto } from '@application/dto/set/GetSetDto';

export interface IGetSet {
  getAll(): Promise<Set[] | null>;
  getById(id: number): Promise<Set | null>;
  getAllByUserId(userId: number): Promise<GetAllByUserIdResponseDto | null>;
}
