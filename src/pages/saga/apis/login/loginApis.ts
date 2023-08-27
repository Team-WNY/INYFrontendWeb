import axios from "axios";
import conf from "../../../../data/config/config";
import {LoginInfo} from "../../../../data/interface/login/loginInterface";

export const postLoginUser = async (params: LoginInfo) => {

    const {data} = await axios.post(conf.API.URL.LOGIN.URL_LOGIN.LOGIN, {
        params: {
            accountId: params.accountId,
            password: params.password,
        }
    })
    return data
}

export const postLogoutUser = async (params: LoginInfo) => {

    const {data} = await axios.post(conf.API.URL.LOGIN.URL_LOGIN.LOGOUT, {
        params: {
            accountId: params.accountId,
            password: params.password,
        }
    })
    return data
}


