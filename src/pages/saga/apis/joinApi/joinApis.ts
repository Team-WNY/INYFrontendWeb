import axios from "axios";
import conf from "../../../../data/config/config";


export const getAccountIdDupChk = async (params: string) => {

    const {data} = await axios.post(conf.API.URL.JOIN.URL_JOIN.ID_CHECK, null,{
        params: {
            accountId: params,
        }
    })
console.log('data '+ data);
    return data
}

export const getEmailChk = async (params: string) => {
    const {data} = await axios.post(conf.API.URL.JOIN.URL_JOIN.EMAIL_CHECK, null,{
        params: {
            email: params,
        }
    })

    return data
}

export const getMberChk = async (params: any) => {
    console.log("params ",params)
    const {data} = await axios.post(conf.API.URL.JOIN.URL_JOIN.MBER_CHECK,params)
    return data
}

