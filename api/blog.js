import {BASE_PATHAPI} from "../utils/constants"
import {authFetch} from "../utils/fetch"


export async function getBlog(logout) {

    try {
        const url = `${BASE_PATHAPI}`
        const result = authFetch(url, null, logout)
        return result ? result : null
        
    } catch (error) {
        console.log(error)
        return null
    }
    
}

export async function getBlogId(idUser, logout) {

    try {
        const url = `${BASE_PATHAPI}/${idUser}`
        const result = authFetch(url, null, logout)
        return result ? result : null
        
    } catch (error) {
        console.log(error)
        return null
    }
    
}