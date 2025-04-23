import { CreateSetDto } from '../../dto/set/CreateSetDto';
import { UpdateSetDto } from '../../dto/set/UpdateSetDto';
import { Set } from '@domain/entities/Set';

export interface ISetServices {
  createEntity(set: CreateSetDto): Promise<void>;
  updateEntity(setId: number, updateInfo: UpdateSetDto): Promise<void>;
  deleteEntity(setId: number): Promise<void>;
  getEntityById(setId: number): Promise<Set | null>;
  showListEntity(): Promise<Set[] | null>;
}
