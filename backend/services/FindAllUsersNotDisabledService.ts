import IUserByBd from "../interfaces/IUserByBd";
import prismaClient from "./PrismaClientService";

class FindAllUsersNotDisabledService {
    async execute() {
        const users = await prismaClient.user.findMany({
            where: {
                disabled: false,
            },
            include: {
                vacina: {
                    include: {
                        reminderConfig: true
                    }
                }
            }
        })
        return users
    }
}

export {
    FindAllUsersNotDisabledService
}