import {combineReducers} from "redux";
import testServerStore from "./test/testServerStore";
import userServerStore from "./user/userServerStore";
import needYouServerStore from "./needYou/needYouServerStore";


const serverStore = combineReducers({
    // test: testServerStore,
    user: userServerStore,
    needYou: needYouServerStore,
})

export default serverStore
