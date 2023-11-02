import axios from "axios";
import conf from "../../../../data/config/config";
import { queryHelpers } from "@testing-library/react";

export const getNoticeList = async (params: string) => {

    const {data} = await axios.get(conf.API.URL.NOTICE.URL_NOTICE.LIST, {
        params: {
            test:params,
        }
    })

    return data
}

