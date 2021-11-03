import { Http_Methods } from '../models/methods'
import { Fetch } from './api'


const saveUser = async (user: Object) => {
    return await Fetch.request("user/save/", Http_Methods.POST, {
        body: JSON.stringify({ user: user })
    })
}
export {
    saveUser
}
