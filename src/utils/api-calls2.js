import { publicCmsRequest } from "./axios-utils"

export const whyJoinManApi = async()=>{
    // cmsRequest
    const resp = await publicCmsRequest.get('membership/why-join/public')
    return resp.data.data
}