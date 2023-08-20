import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/testInterface";
import {requestTestString} from "../apis/mainApi/mainApis";
import {testTypes} from "../action/testAction";
import {updateTestString} from "../store/server/test/testServerStore";


const getTestString = function* (action: PayloadAction<boolean>) {
    try {
        const payload = action.payload
        const data: ApiResponse = yield call(requestTestString, payload)

        if(data) {
            yield put(updateTestString(data.data))
        } else {
            yield put(updateTestString(null))
        }
    } catch (e) {
        console.log("error !!")
    }
}

function* watchRoot() {
    yield takeLatest(testTypes.REQUEST_MAIN_TEST_STRING, getTestString)
}

export default function* TestSaga() {
    yield all([watchRoot()])
}
