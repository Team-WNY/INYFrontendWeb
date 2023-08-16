import {combineReducers} from "redux";
import testServerStore from "./test/testServerStore";
import userServerStore from "./user/userServerStore";


const serverStore = combineReducers({
    // test: testServerStore,
    user: userServerStore
})

export default serverStore
