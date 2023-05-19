import { publicCmsRequest } from "./axios-utils"

export const whyJoinManApi = async()=>{
    // cmsRequest
    const resp = await publicCmsRequest.get('membership/why-join/public')
    return resp.data.data
}

export const joinStepsApi = async()=>{
    const resp = await publicCmsRequest.get('membership/join-step/public')
    return resp.data.data

}

export const faqApi = async()=>{
    const resp = await publicCmsRequest.get('membership/faq/public')
    return resp.data.data

}