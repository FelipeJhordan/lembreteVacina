import prismaClient from "./PrismaClientService";

class VerifyIfUserRegisteredService {
    async execute(email?: string, uuid?: string) {
        console.log(email, uuid)
        let field = (!!email ? "email" : "uuid")
        const user = await prismaClient.user.findFirst({
            where: {
                [field]: email || uuid
            }
        })
        return user
    }
}

export {
    VerifyIfUserRegisteredService
}