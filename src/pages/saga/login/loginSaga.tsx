import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/commonInterface/commonInterface";
import {isDev} from "../../../data/config/config";
import {loginTypes} from "../action/login/loginActions";
import {LoginInfo} from "../../../data/interface/login/loginInterface";
import {updateIsLogin} from "../store/server/login/loginServerStore";
import {postLoginUser} from "../apis/login/loginApis";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {ModalConst} from "../../../data/const/modalConst";
import {updateCommonModalStatus} from "../store/view/modal/modalViewStore";

const requestLoginUser = function* (action: PayloadAction<LoginInfo>) {
    const payload = action.payload
    console.log("paylaod ", payload)
    try {
        const data: ApiResponse = yield call(postLoginUser, payload)

        if (data.accessToken) {
            yield put(updateIsLogin(true))
        }
    } catch (e) {
        yield put(updateIsLogin(false))
        const payload: CommonModalInterface = {
            title: ModalConst["login"]["login"].title,
            content: ModalConst["login"]["login"].content,
            isOpen: true,
            currentPage: "login",
        }
        yield put(updateCommonModalStatus(payload))
        console.log("requestLoginUser error !!")
    }
}

function* watchRoot() {
    yield takeLatest(loginTypes.REQUEST_LOGIN_USER, requestLoginUser)
}

export default function* LoginSaga() {
    yield all([watchRoot()])
}
