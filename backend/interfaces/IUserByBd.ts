import ICreateUserRequest from "./ICreateUserRequest";
export default interface IUserByBd {
    id?: number,
    name: string,
    email: string,
    disabled?: boolean,
    uuid: string,
    vacina: {
        id?: number,
        name: string,
        dose: number,
        dataAplicacao: string,
        reminderConfig: {
            id?: number,
            send15DaysBefore: boolean,
            send7DaysBefore: boolean,
            send1DaysBefore: boolean
        }
    }
}
