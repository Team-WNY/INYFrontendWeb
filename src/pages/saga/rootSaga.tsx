import {all, fork} from "@redux-saga/core/effects";
import TestSaga from "./test/testSaga";
import NeedYouSaga from "./needYou/needYouSaga";
import JoinSaga from "./join/joinSaga";


export default function* rootSaga() {
    yield all([
        fork(TestSaga),
        fork(NeedYouSaga),
        fork(JoinSaga)
    ])
}
