import { Http_Methods } from '../models/methods'
import { Fetch } from './api'


const disableUserByUiid = async (uuid: string) => {
    return await Fetch.request(`user/disable/${uuid}`, Http_Methods.GET, {})
}
export {
    disableUserByUiid
}
