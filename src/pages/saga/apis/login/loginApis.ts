import axios from "axios";
import conf from "../../../../data/config/config";
import {LoginInfo} from "../../../../data/interface/login/loginInterface";
import {xhr} from "../xhr";

export const postLoginUser = async (params: LoginInfo) => {

    const {data} = await axios.post(conf.API.URL.LOGIN.URL_LOGIN.LOGIN, params)
    return data
}

export const postGetUserInfo = async (params: string) => {

    const {data} = await xhr.post(conf.API.URL.LOGIN.URL_LOGIN.GET_INFO, null, {
        params: {accountId: params}
    })
    return data
}

export const postLogoutUser = async (params: LoginInfo) => {

    // const {data} = await xhr.post(conf.API.URL.LOGIN.URL_LOGIN.LOGOUT, {
    //     params: {
    //         accountId: params.accountId,
    //         password: params.password,
    //     }
    // })
    // return data
}


