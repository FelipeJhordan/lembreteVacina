import cron from 'node-cron'

import { SendEmailService } from '../services/SendEmailService'

export default async function runRotine() {
    const emailService = new SendEmailService()
    await cron.schedule('* * */24 * * *', async () => {
        await emailService.execute()
    })
}

