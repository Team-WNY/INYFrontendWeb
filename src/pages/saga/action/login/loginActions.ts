import {createAction} from "@reduxjs/toolkit";
import {LoginInfo} from "../../../../data/interface/login/loginInterface";


const loginTypes = {

    REQUEST_LOGIN_USER : `REQUEST_LOGIN_USER`,

}

const loginActions = {

    requestLoginUser: createAction<LoginInfo>(loginTypes.REQUEST_LOGIN_USER)
}

export {loginTypes, loginActions}
