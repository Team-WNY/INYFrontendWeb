import {PayloadAction} from "@reduxjs/toolkit";
import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {ApiResponse} from "../../../data/interface/commonInterface";
import {settingsTypes} from "../action/settings/settingsActions";
import {updateNoticeList} from "../store/server/settings/settingsServerStore";
import {getNoticeList} from "../apis/settingsApi/settingsApis";
import {isDev} from "../../../data/config/config";
import {noticeList} from "../../../data/const/settingsConst";

const requestNoticeList = function* (action: PayloadAction<string>) {
    const payload = action.payload
    console.log("payload",payload);
    if (isDev) {
        yield put(updateNoticeList(noticeList))
    } else {
        try {
            const data: ApiResponse = yield call(getNoticeList, payload)
            if (data) {
                yield put(updateNoticeList(data.payload))
            } else {
                yield put(updateNoticeList(null))
            }
        } catch (e) {
            console.log("requestNoticeList error !!")
        }
    }
}

function* watchRoot() {
    yield takeLatest(settingsTypes.REQUEST_NOTICE_LIST, requestNoticeList)
}

export default function* SettingsSaga() {
    yield all([watchRoot()])
}
