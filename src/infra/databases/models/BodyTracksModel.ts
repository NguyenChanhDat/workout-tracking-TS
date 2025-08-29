import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersModel } from './UsersModel';

@Index('PK__BodyTrac__3213E83FDD772504', ['id'], { unique: true })
@Index('UQ__BodyTrac__3213E83EE2251F33', ['id'], { unique: true })
@Entity('BodyTracks', { schema: 'dbo' })
export class BodyTracksModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('decimal', { name: 'weight', precision: 5, scale: 2 })
  weight!: number;

  @Column('decimal', { name: 'height', precision: 5, scale: 2 })
  height!: number;

  @Column('date', { name: 'date' })
  date!: Date;

  @Column({ type: 'int', nullable: false })
  userId!: number;

  @ManyToOne(() => UsersModel, (users) => users.bodyTracks)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user!: UsersModel;
}
