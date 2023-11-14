import {combineReducers} from "redux";
import userServerStore from "./user/userServerStore";
import needYouServerStore from "./needYou/needYouServerStore";
import joinServerStore from "./join/joinServerStore";
import loginServerStore from "./login/loginServerStore";
import settingsServerStore from "./settings/settingsServerStore";


const serverStore = combineReducers({
    user: userServerStore,
    needYou: needYouServerStore,
    join: joinServerStore,
    login: loginServerStore,
    settings: settingsServerStore,
})

export default serverStore
