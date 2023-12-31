import {all, fork} from "@redux-saga/core/effects";
import NeedYouSaga from "./needYou/needYouSaga";
import LoginSaga from "./login/loginSaga";
import JoinSaga from "./join/joinSaga";


export default function* rootSaga() {
    yield all([
        fork(NeedYouSaga),
        fork(JoinSaga),
        fork(NeedYouSaga),
        fork(LoginSaga),
    ])
}
