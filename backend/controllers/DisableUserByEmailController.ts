import { Request, Response } from 'express'
import { DisableUserByEmailService } from '../services/DisableUserByEmailService'

class DisableUserByEmailController {
    async handle(request: Request, response: Response) {
        const { uuid } = request.params
        try {
            await new DisableUserByEmailService().execute(uuid)
            response.sendStatus(200)
        } catch (e) {
            console.log(e)
            response.sendStatus(400)
        }
    }
}

export {
    DisableUserByEmailController
}