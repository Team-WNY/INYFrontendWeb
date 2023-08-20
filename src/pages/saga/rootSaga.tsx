import {all, fork} from "@redux-saga/core/effects";
import TestSaga from "./test/testSaga";
import NeedYouSaga from "./needYou/needYouSaga";


export default function* rootSaga() {
    yield all([
        fork(TestSaga),
        fork(NeedYouSaga)
    ])
}
