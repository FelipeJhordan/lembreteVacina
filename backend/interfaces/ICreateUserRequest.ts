export default interface ICreateUserRequest {
    name: string,
    email: string,
    disabled?: boolean,
    uuid: string,
    vacina: {
        name: string,
        dose: number,
        dataAplicacao: string,
        reminderConfig: {
            send15DaysBefore: boolean,
            send7DaysBefore: boolean,
            send1DaysBefore: boolean
        }
    },

}
