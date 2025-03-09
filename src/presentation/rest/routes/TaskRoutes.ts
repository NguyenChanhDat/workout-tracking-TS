import express from 'express'
import { ITaskController } from '../controllers/task/ITaskControllers'
import { taskControllerGlobal } from '../../../infra/locator/TaskControllerGlobal'

const router = express.Router()

const taskController: ITaskController = taskControllerGlobal

router.post('/assign/', taskController.assignTaskController)

router.get('/', taskController.get)

router.post('/', taskController.create)

router.delete('/', taskController.delete)

router.put('/', taskController.update)

export { router as TaskRoutes }
