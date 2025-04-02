import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserModel } from '../models/UserModel';
import { BodyTrackModel } from '../models/BodyTrackModel';
import { ExerciseModel } from '../models/ExerciseModel';

export const MssqlConfig = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'Dat20112011',
  server: process.env.DB_SERVER || 'localhost',
  port: Number(process.env.DB_PORT) || 1401,
  options: {
    trustServerCertificate: true,
  },
};

export const typeormConfig = new DataSource({
  type: 'mssql',
  host: process.env.DB_SERVER || 'localhost',
  port: Number(process.env.DB_PORT) || 1401,
  username: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'Dat20112011',
  database: process.env.DB_DATABASE || 'LocalDatabase',
  options: {
    trustServerCertificate: true,
  },
  entities: [UserModel, BodyTrackModel, ExerciseModel],
  synchronize: true,
});
