import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/commonInterface";
import {loginTypes} from "../action/login/loginActions";
import {LoginInfo} from "../../../data/interface/login/loginInterface";
import {updateIsLogin} from "../store/server/login/loginServerStore";
import {postGetUserInfo, postLoginUser} from "../apis/login/loginApis";
import {CommonModalInterface} from "../../../data/interface/modal/commonModalInterface";
import {ModalConst} from "../../../data/const/modalConst";
import {updateCommonModalStatus} from "../store/view/modal/modalViewStore";
import {updateUserInfo} from "../store/server/user/userServerStore";

const requestLoginUser = function* (action: PayloadAction<LoginInfo>) {
    const payload = action.payload
    try {
        const data: ApiResponse = yield call(postLoginUser, payload)
        if (data.accessToken) {
            localStorage.setItem("Authorization", "Bearer " + data.accessToken);
            const userData: ApiResponse = yield call(postGetUserInfo, payload.accountId)
            if (userData.status === 200) {
                yield put(updateUserInfo(userData.payload))
                yield put(updateIsLogin(true))
            }
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
