import axios from "axios";
import conf from "../../../../data/config/config";


export const getNeedYouList = async (params: string) => {

    const {data} = await axios.get(conf.API.URL.NEED_YOU.URL_NEED_YOU.LIST, {
        params: {
            test:params,
        }
    })

    return data
}
