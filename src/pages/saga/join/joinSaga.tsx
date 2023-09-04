import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/testInterface";
import {needYouTypes} from "../action/needYou/needYouActions";
import {updateNeedYouList} from "../store/server/needYou/needYouServerStore";
import {getNeedYouList} from "../apis/needYouApi/needYouApis";
import {isDev} from "../../../data/config/config";
import {needYouMockList} from "../../../data/const/testConst";
import {joinTypes} from "../action/join/joinActions";
import {getAccountIdDupChk} from "../apis/joinApi/joinApis";
import {getEmailChk} from "../apis/joinApi/joinApis";
import {updateIsAccountIdDupCheck} from "../store/server/join/joinServerStore";

const requestAccountIdDupChk = function* (action: PayloadAction<string>) {
    const payload = action.payload

    try {
        const data: ApiResponse = yield call(getAccountIdDupChk, payload)
        console.log("data  ", data)
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
        console.log("data  ", data)
    } catch (e) {
        console.log("updateIsAccountEmailCheck error !!")
    }
}

function* watchRoot() {
    yield takeLatest(joinTypes.REQUEST_ACCOUNT_ID_DUP_CHK, requestAccountIdDupChk)
    yield takeLatest(joinTypes.REQUEST_EMAIL_CHK, requestEmailChk)
}

export default function* JoinSaga() {
    yield all([watchRoot()])
}
