import {combineReducers} from "redux";
import userServerStore from "./user/userServerStore";
import needYouServerStore from "./needYou/needYouServerStore";
import joinServerStore from "./join/joinServerStore";
import loginServerStore from "./login/loginServerStore";


const serverStore = combineReducers({
    user: userServerStore,
    needYou: needYouServerStore,
    join: joinServerStore,
    login: loginServerStore,
})

export default serverStore
