import axios from "axios";
import conf from "../../../../data/config/config";


export const getAccountIdDupChk = async (params: string) => {

    const {data} = await axios.post(conf.API.URL.JOIN.URL_JOIN.ID_CHECK, null,{
        params: {
            accountId: params,
        }
    })

    return data
}
