import { Http_Methods } from "../models/methods";
console.log(import.meta.env.VITE_ADDRESS_API)
class Fetch {
    private constructor() { }
    private static address = import.meta.env.VITE_ADDRESS_API;

    static async request(path: string, method: Http_Methods, allParamenters: RequestInit) {
        return fetch(`${Fetch.address + path}`, {
            ...allParamenters,
            method: method,

            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        })
    }
}

export {
    Fetch
}