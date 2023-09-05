import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/commonInterface/commonInterface";
import {joinTypes} from "../action/join/joinActions";
import {getAccountIdDupChk, getMberChk} from "../apis/joinApi/joinApis";
import {getEmailChk} from "../apis/joinApi/joinApis";
import {updateIsAccountIdDupCheck} from "../store/server/join/joinServerStore";

const requestAccountIdDupChk = function* (action: PayloadAction<string>) {
    const payload = action.payload

    try {
        const data: ApiResponse = yield call(getAccountIdDupChk, payload)
        console.log("id-param  ", data)
        if (!data.payload.Duplication) {
            console.log("data.payload.Duplication  ", data.payload.Duplication)
            yield put(updateIsAccountIdDupCheck(true))
        } else {
            yield put(updateIsAccountIdDupCheck(false))
        }
    } catch (e) {
        console.log("updateIsAccountIdDupCheck error !!")
    }
}

const requestEmailChk = function* (action: PayloadAction<string>) {
    const payload = action.payload
    try {
        const data: ApiResponse = yield call(getEmailChk, payload)
        console.log("email-param  ", data)
    } catch (e) {
        console.log("updateIsAccountEmailCheck error !!")
    }
}

const requestMberInfo = function* (action: PayloadAction<any>) {
    const payload = action.payload
    try {
        const data: ApiResponse = yield call(getMberChk, payload)
        console.log("join-param  ", data)
    } catch (e) {
        console.log("requestMberInfo error !!")
    }
}

function* watchRoot() {
    yield takeLatest(joinTypes.REQUEST_ACCOUNT_ID_DUP_CHK, requestAccountIdDupChk)
    yield takeLatest(joinTypes.REQUEST_EMAIL_CHK, requestEmailChk)
    yield takeLatest(joinTypes.REQUEST_MBER_INFO, requestMberInfo)
}

export default function* JoinSaga() {
    yield all([watchRoot()])
}
