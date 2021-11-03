import { Http_Methods } from '../models/methods'
import { Fetch } from './api'


const getUserByUuid = async (uuid: string) => {
    return await Fetch.request(`user/${uuid}`, Http_Methods.GET, {})
}
export {
    getUserByUuid
}
