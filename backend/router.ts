import { Router } from 'express'
import { CreateUserAndVacineController } from './controllers/CreateUserAndVacineController'
import { DisableUserByEmailController } from './controllers/DisableUserByEmailController'
import { SendEmailService } from './services/SendEmailService'

const router = Router()

router.post("/api/v1/user/save", new CreateUserAndVacineController().handle)
router.get("/api/v1/user/sav", new SendEmailService().execute)
router.get("/api/v1/user/disable/:uuid", new DisableUserByEmailController().handle)

export default router