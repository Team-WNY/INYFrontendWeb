import {combineReducers} from "redux";
import testViewStore from "./test/testViewStore";
import modalViewStore from "./modal/modalViewStore";


const viewRootStore = combineReducers({
    test: testViewStore,
    modal: modalViewStore,
})

export default viewRootStore
