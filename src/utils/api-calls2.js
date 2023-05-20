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

export const getMembersApi = async()=>{
    const resp = await publicCmsRequest.get('membership/our-members/public')
    return resp.data.data

}


export const getSectoralApi = async()=>{
 const resp = await publicCmsRequest.get('structure/sectoral-group/public')
 return resp.data.data
}

export const getMrcApi =async ()=>{

    const resp = await publicCmsRequest.get('structure/mrc-service/public')
    return resp.data.data
}

export const getMPDCLApi =async ()=>{

    const resp = await publicCmsRequest.get('structure/mpdcl-service/public')
    return resp.data.data
}
