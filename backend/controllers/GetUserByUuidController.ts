import { Request, Response } from 'express'
import { DisableUserByEmailService } from '../services/DisableUserByEmailService'
import { VerifyIfUserRegisteredService } from '../services/VerifyIfUserRegisteredService'

class GetUserByUuidController {
    async handle(request: Request, response: Response) {
        const { uuid } = request.params
        try {
            const user = await new VerifyIfUserRegisteredService().execute(null, uuid)
            response.status(200).send({ user: user })
        } catch (e) {
            console.log(e)
            response.sendStatus(400)
        }
    }
}

export {
    GetUserByUuidController
}