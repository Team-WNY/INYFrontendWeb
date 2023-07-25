import {combineReducers} from "redux";
import testServerStore from "./test/testServerStore";


const serverStore = combineReducers({
    test: testServerStore
})

export default serverStore
