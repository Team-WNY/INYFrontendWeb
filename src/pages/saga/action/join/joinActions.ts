import {createAction} from "@reduxjs/toolkit";


const joinTypes = {

    REQUEST_ACCOUNT_ID_DUP_CHK : `REQUEST_ACCOUNT_ID_DUP_CHK`,

}

const joinActions = {

    requestAccountIdDupChk: createAction<string>(joinTypes.REQUEST_ACCOUNT_ID_DUP_CHK)
}

export {joinTypes, joinActions}
