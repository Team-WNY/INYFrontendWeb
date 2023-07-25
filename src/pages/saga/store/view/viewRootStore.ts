import {combineReducers} from "redux";
import testViewStore from "./test/testViewStore";


const viewRootStore = combineReducers({
    test: testViewStore,
})

export default viewRootStore
