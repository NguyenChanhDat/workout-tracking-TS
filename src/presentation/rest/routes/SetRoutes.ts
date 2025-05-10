import { Router } from 'express';
import { setControllersGlobal } from '@infra/locator/controllers/SetControllersGlobal';

const router = Router();

router.post('/', (req, res) => setControllersGlobal.create(req, res));

router.put('/', (req, res) => setControllersGlobal.update(req, res));

router.delete('/:id', (req, res) => setControllersGlobal.delete(req, res));

router.get('/', (req, res) => setControllersGlobal.get(req, res));

export { router as SetRoutes };
