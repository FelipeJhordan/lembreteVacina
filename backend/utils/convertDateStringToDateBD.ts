export default function convertStringToDateBD(date: string): Date {
    const stringFormated: string = date.split("/").reverse().join("-").toString()
    return new Date(stringFormated)
}