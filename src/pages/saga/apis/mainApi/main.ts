import axios from "axios";
import conf from "../../../../data/config/config";

export const requestTestString = async (params: boolean) => {
    const {data} = await axios.get(conf.API.URL.TEST.URL_TEST.TEST, {
        params: {
            test: params
        }
    })


}
