import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

class EmailConfig {
    private static instance: EmailConfig
    private transporter
    constructor() { }

    public static getTransporter(): Transporter<SMTPTransport.SentMessageInfo> {
        if (!EmailConfig.instance) {
            this.instance = new EmailConfig()
            this.instance.transporter = EmailConfig.createConfig()
        }

        return EmailConfig.instance.transporter
    }

    private static createConfig() {
        console.log(process.env.EMAIL_LOGIN)
        return nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_LOGIN, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        })
    }
}

export {
    EmailConfig
}