import { Activity } from '../entities/Activity';
import { EntityRepository } from './EntityRepository';

export interface IActivityRepository extends EntityRepository<Activity> {}
