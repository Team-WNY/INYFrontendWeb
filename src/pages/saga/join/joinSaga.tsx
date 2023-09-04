import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/commonInterface";
import {joinTypes} from "../action/join/joinActions";
import {getAccountIdDupChk} from "../apis/joinApi/joinApis";
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

function* watchRoot() {
    yield takeLatest(joinTypes.REQUEST_ACCOUNT_ID_DUP_CHK, requestAccountIdDupChk)
}

export default function* JoinSaga() {
    yield all([watchRoot()])
}
