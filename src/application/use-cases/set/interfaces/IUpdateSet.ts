import { UpdateSetDto } from '../../../dto/set/updateSetDto';

export interface IUpdateSet {
  execute(setId: number, updateInfo: UpdateSetDto): Promise<void>;
}
