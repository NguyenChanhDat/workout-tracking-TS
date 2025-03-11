import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserModel } from './UserModel';

@Entity('BodyTracks')
export class BodyTrackModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', nullable: false })
  weight!: number;

  @Column({ type: 'int', nullable: false })
  height!: number;

  @Column({ type: 'date', nullable: false })
  date!: Date;

  @ManyToOne(() => UserModel, (user) => user.id)
  userId!: number;
}
