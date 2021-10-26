import { Router } from 'express'
import { CreateUserAndVacineController } from './controllers/CreateUserAndVacineController'

const router = Router()

router.post("/api/v1/user/save", new CreateUserAndVacineController().handle)


export default router