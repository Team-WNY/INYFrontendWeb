import {combineReducers} from "redux";
import modalViewStore from "./modal/modalViewStore";


const viewRootStore = combineReducers({
    modal: modalViewStore,
})

export default viewRootStore
