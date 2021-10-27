import ICreateUserRequest from "../interfaces/ICreateUserRequest";
import convertStringToDateBD from "../utils/convertDateStringToDateBD";
import prismaClient from "./PrismaClientService";
import { UpdateDisableForUserService } from "./UpdateDisableForUserService";
import { VerifyIfUserRegisteredService } from "./VerifyIfUserRegisteredService";

type returnData = {
    statusHTTP: number,
    msg: string,
    user: any
}

class CreateUserAndVacineService {
    async execute(userRequest: ICreateUserRequest) {
        const userExists = await new VerifyIfUserRegisteredService().execute(userRequest.email)
        if (!!userExists) {
            return await this.updateUserAndVacine(userExists, userRequest)
        }
        return await this.createUserAndVacine(userExists, userRequest)

    }

    private async updateUserAndVacine(userByBD, { vacina }): Promise<returnData> {
        await new UpdateDisableForUserService().execute(userByBD, false)
        const userUpdated = await prismaClient.vacine.update({
            data: {
                dataAplicacao: convertStringToDateBD(vacina.dataAplicacao),
                name: vacina.name,
                dose: vacina.dose,
                reminderConfig: {
                    update: {
                        send15DaysBefore: vacina.reminderConfig.send15DaysBefore,
                        send7DaysBefore: vacina.reminderConfig.send7DaysBefore,
                        send1DaysBefore: vacina.reminderConfig.send1DaysBefore
                    }
                }
            },
            where: {
                id: userByBD.id
            },
            include: { user: true, reminderConfig: true }
        })
        return { user: userUpdated, msg: "Dados atualizados", statusHTTP: 200 }
    }
    private async createUserAndVacine(userExists, userByRequest: ICreateUserRequest): Promise<returnData> {
        const { vacina } = userByRequest
        const userCreated = await prismaClient.user.create({
            data: {
                name: userByRequest.name,
                email: userByRequest.email,
                vacina: {
                    create: {
                        dataAplicacao: convertStringToDateBD(vacina.dataAplicacao),
                        name: vacina.name,
                        dose: vacina.dose,
                        reminderConfig: {
                            create: {
                                send15DaysBefore: vacina.reminderConfig.send15DaysBefore,
                                send7DaysBefore: vacina.reminderConfig.send7DaysBefore,
                                send1DaysBefore: vacina.reminderConfig.send1DaysBefore
                            }
                        }
                    }
                }
            },
            include: {
                vacina: {
                    include: {
                        reminderConfig: true
                    }
                }
            }
        })

        return { user: userCreated, msg: "Dados Criados", statusHTTP: 201 }
    }
}



export {
    CreateUserAndVacineService
}