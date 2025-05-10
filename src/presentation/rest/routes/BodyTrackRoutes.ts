import { Router } from 'express';
import { bodyTrackControllersGlobal } from '@infra/locator/controllers/BodyTrackControllersGlobal';

const router = Router();

router.post('/', (req, res) => bodyTrackControllersGlobal.create(req, res));

router.put('/', (req, res) => bodyTrackControllersGlobal.update(req, res));

router.delete('/:id', (req, res) =>
  bodyTrackControllersGlobal.delete(req, res)
);

router.get('/', (req, res) => bodyTrackControllersGlobal.get(req, res));

export { router as BodyTrackRoutes };
