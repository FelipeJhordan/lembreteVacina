import IUserByBd from "../interfaces/IUserByBd";
import prismaClient from "./PrismaClientService";

class UpdateDisableForUserService {
    async execute(userByBd: IUserByBd, disabled: boolean) {
        if (userByBd.disabled !== disabled)
            await prismaClient.user.update({
                where: {
                    id: userByBd.id
                },
                data: {
                    disabled: disabled
                }
            })
    }
}

export {
    UpdateDisableForUserService
}