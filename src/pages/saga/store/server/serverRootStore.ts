import {combineReducers} from "redux";
import testServerStore from "./test/testServerStore";
import userServerStore from "./user/userServerStore";
import needYouServerStore from "./needYou/needYouServerStore";
import loginServerStore from "./login/loginServerStore";


const serverStore = combineReducers({
    // test: testServerStore,
    user: userServerStore,
    needYou: needYouServerStore,
    login: loginServerStore,
})

export default serverStore
