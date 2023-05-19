import { cmsRequest } from "./axios-utils"

export const whyJoinManApi = async()=>{
    // cmsRequest
    const resp = await cmsRequest.get('membership/why-join/public')
    return resp.data.data
}