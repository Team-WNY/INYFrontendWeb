import {combineReducers} from "redux";
import testServerStore from "./test/testServerStore";
import userServerStore from "./user/userServerStore";
import needYouServerStore from "./needYou/needYouServerStore";
import joinServerStore from "./join/joinServerStore";


const serverStore = combineReducers({
    // test: testServerStore,
    user: userServerStore,
    needYou: needYouServerStore,
    join: joinServerStore,
})

export default serverStore
