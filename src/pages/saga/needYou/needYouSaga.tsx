import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/testInterface";
import {needYouTypes} from "../action/needYou/needYouActions";
import {updateNeedYouList} from "../store/server/needYou/needYouServerStore";
import {getNeedYouList} from "../apis/needYouApi/needYouApis";
import {isDev} from "../../../data/config/config";
import {needYouMockList} from "../../../data/const/testConst";

const requestNeedYouList = function* (action: PayloadAction<string>) {
    const payload = action.payload

    if (isDev) {
        yield put(updateNeedYouList(needYouMockList))
    } else {
        try {
            const data: ApiResponse = yield call(getNeedYouList, payload)

            if (data) {
                yield put(updateNeedYouList(data.payload))
            } else {
                yield put(updateNeedYouList(null))
            }
        } catch (e) {
            console.log("requestNeedYouList error !!")
        }
    }
}

function* watchRoot() {
    yield takeLatest(needYouTypes.REQUEST_NEED_YOU_LIST, requestNeedYouList)
}

export default function* NeedYouSaga() {
    yield all([watchRoot()])
}
