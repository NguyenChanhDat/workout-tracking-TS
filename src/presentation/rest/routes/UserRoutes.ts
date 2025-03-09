import express from 'express'
import { IUserController } from '../controllers/user/IUserControllers'
import { returnUserControllers } from '../../../infra/locator/UserControllersGlobal'

const router = express.Router()

const userController: IUserController = returnUserControllers()

router.get('/', userController.get)

router.post('/', userController.create)

router.delete('/', userController.delete)

router.put('/', userController.update)

export { router as UserRoutes }
