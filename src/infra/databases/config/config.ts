import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UsersModel } from '../models/UsersModel';
import { BodyTracksModel } from '../models/BodyTracksModel';
import { ExercisesModel } from '../models/ExercisesModel';
import { PlansModel } from '../models/PlansModel';
import { SessionsModel } from '../models/SessionsModel';
import { SetsModel } from '../models/SetsModel';

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
  entities: [
    UsersModel,
    BodyTracksModel,
    ExercisesModel,
    PlansModel,
    SessionsModel,
    SetsModel,
  ],
});
