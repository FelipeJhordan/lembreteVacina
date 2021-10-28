import { PrismaClient } from '.prisma/client';
import IUserByBd from '../interfaces/IUserByBd';
import prismaClient from "./PrismaClientService";
import { UpdateDisableForUserService } from './UpdateDisableForUserService';
import { VerifyIfUserRegisteredService } from './VerifyIfUserRegisteredService';

class DisableUserByEmailService {
    async execute(uuid: string) {
        const user = await new VerifyIfUserRegisteredService().execute(null, uuid)
        await new UpdateDisableForUserService().execute(user as IUserByBd, true)
    }
}

export {
    DisableUserByEmailService
}