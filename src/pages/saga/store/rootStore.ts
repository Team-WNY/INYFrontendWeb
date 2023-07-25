import {combineReducers} from "redux";
import serverStore from "./server/serverRootStore";
import viewStore from "./view/viewRootStore";


const rootStore = combineReducers({
    server: serverStore,
    view: viewStore
})

export type RootState = ReturnType<typeof rootStore>
export default rootStore
