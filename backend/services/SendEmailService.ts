import IUserByBd from "../interfaces/IUserByBd"
import moment from 'moment'
import { FindAllUsersNotDisabledService } from "./FindAllUsersNotDisabledService"
import { UpdateDisableForUserService } from "./UpdateDisableForUserService"
import { EmailConfig } from "../config/EmailConfig"
import { User, Vacine } from ".prisma/client"
import converteNumberToOrdinal from "../utils/converteNumberToOrdinal"

type HtmlGenerateParams = {
    user: User,
    vacina: Vacine,
    dias: number
}

class SendEmailService {
    async execute() {
        let today = moment().format("YYYY-MM-D")
        const users = await new FindAllUsersNotDisabledService().execute()
        try {
            await Promise.all(users.map(async (user) => {
                if (user.vacina.reminderConfig.send15DaysBefore
                    && Math.ceil(moment(user.vacina.dataAplicacao).diff(today, "days", true)) == 15) { // Conta o dia feito também
                    await SendEmailService.createEmailToSend(user, user.vacina, 15)
                } else if (user.vacina.reminderConfig.send15DaysBefore
                    && Math.ceil(moment(user.vacina.dataAplicacao).diff(today, "days", true)) == 7) {
                    await SendEmailService.createEmailToSend(user, user.vacina, 7)
                }
                else if (user.vacina.reminderConfig.send1DaysBefore
                    && Math.ceil(moment(user.vacina.dataAplicacao).diff(today, "days", true)) == 1) {
                    await SendEmailService.createEmailToSend(user, user.vacina, 1)
                } else {
                    await new UpdateDisableForUserService().execute(user as unknown as IUserByBd, true)
                }
            }))
        } catch (e) {
            console.log(e)
        }
    }

    static async createEmailToSend(user: User, vacina: Vacine, dias) {
        let html = await this.generateHTMl({ user, vacina, dias })
        let transporter = EmailConfig.getTransporter()
        await transporter.sendMail({
            to: user.email,
            subject: `Lembre-se de vacinar, falta ${dias} dias`,
            text: `${user.name}!! Não se esqueça de vacinar, falta ${dias + (dias > 1 ? ' dias' : ' dia')}  para você tomar a ${converteNumberToOrdinal(vacina.dose)}
            da vacina ${vacina.name}.`,
            html: html
        })
    }

    static async generateHTMl(htmlGenerateParams: HtmlGenerateParams) {
        const appAddress = process.env.APP_ADDRESS
        const appPort = process.env.APP_PORT
        const addressToCancel = appAddress + ":" + appPort + "/" + "api/v1/user/disable/" + htmlGenerateParams.user.uuid
        const { user, vacina, dias } = htmlGenerateParams
        const htmlToSent = `
                <div> 
                    <h1> Não se esqueça ${user.name}!</h1>
                    <h2> Falta ${dias + (dias > 1 ? ' dias' : ' dia')} para tomar a vacina ${vacina.name}</h2>
                    </br>
                    <a href="${addressToCancel}">Não quero mais receber e-mail</a>
                <div>
        `
        return htmlToSent
    }

}

export {
    SendEmailService
}