import express from 'express'
import { ITaskController } from '../controllers/task/ITaskControllers'
import { returnTaskControllers } from '../../../infra/locator/returnTaskControllers'

const router = express.Router()

const taskController: ITaskController = returnTaskControllers()

router.post('/assign/', taskController.assignTaskController)

router.get('/', taskController.get)

router.post('/', taskController.create)

router.delete('/', taskController.delete)

router.put('/', taskController.update)

export { router as TaskRoutes }
