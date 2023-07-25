import {createAction} from "@reduxjs/toolkit";


const testTypes = {
    REQUEST_MAIN_TEST_STRING: `REQUEST_MAIN_TEST_STRING`
}

const testActions = {
    requestMainTestString : createAction<string | null>(testTypes.REQUEST_MAIN_TEST_STRING)
}

export {testTypes, testActions}
