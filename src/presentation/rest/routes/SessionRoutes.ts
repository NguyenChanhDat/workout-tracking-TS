import { Router } from 'express';
import { sessionControllersGlobal } from '@infra/locator/controllers/SessionControllersGlobal';

const router = Router();

router.post('/', (req, res) => sessionControllersGlobal.create(req, res));

router.put('/', (req, res) => sessionControllersGlobal.update(req, res));

router.delete('/:id', (req, res) => sessionControllersGlobal.delete(req, res));

router.get('/', (req, res) => sessionControllersGlobal.get(req, res));

export { router as SessionRoutes };
