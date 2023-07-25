import {all, fork} from "@redux-saga/core/effects";
import TestSaga from "./test/testSaga";


export default function* rootSaga() {
    yield all([
        fork(TestSaga)
    ])
}
