import { UpdateSetDto } from '../../../dto/set/UpdateSetDto';

export interface IUpdateSet {
  execute(setId: number, updateInfo: UpdateSetDto): Promise<void>;
}
