import {createAction} from "@reduxjs/toolkit";

const settingsTypes = {

    REQUEST_NOTICE_LIST : `REQUEST_NOTICE_LIST`,

}

const settingsActions = {

    requestNoticeList: createAction<string>(settingsTypes.REQUEST_NOTICE_LIST)
    
}

export {settingsTypes, settingsActions}
