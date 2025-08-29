import { Router } from 'express';
import { exerciseControllersGlobal } from '@infra/locator/controllers/ExerciseControllersGlobal';

const router = Router();

router.post('/', (req, res) => exerciseControllersGlobal.create(req, res));

router.put('/', (req, res) => exerciseControllersGlobal.update(req, res));

router.delete('/:id', (req, res) => exerciseControllersGlobal.delete(req, res));

router.get('/', (req, res) => exerciseControllersGlobal.get(req, res));

export { router as ExerciseRoutes };
