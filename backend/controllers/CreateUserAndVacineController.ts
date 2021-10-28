import { Request, Response } from 'express'
import { CreateUserAndVacineService } from '../services/CreateUserAndVacineService'

class CreateUserAndVacineController {
    async handle(request: Request, response: Response) {
        const { user: userByBody } = request.body
        try {
            const createUserAndVacineService = new CreateUserAndVacineService
            const { msg, user, statusHTTP } = await createUserAndVacineService.execute(userByBody)
            response.status(statusHTTP).send({
                message: msg,
                user
            })
        } catch (e) {
            response.status(400).send({
                message: "Erro ao criar"
            })
        }

    }
}

export {
    CreateUserAndVacineController
}