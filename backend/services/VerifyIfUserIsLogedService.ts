import prismaClient from "./PrismaClientService";

class VerifyIfUserLogedService {
    async execute(email: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: { equals: email }
            }
        })
        console.log(user)
        console.log(!!user)
        return user
    }
}

export {
    VerifyIfUserLogedService
}