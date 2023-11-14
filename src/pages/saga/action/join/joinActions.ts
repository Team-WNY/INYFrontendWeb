import {createAction} from "@reduxjs/toolkit";


const joinTypes = {

    REQUEST_ACCOUNT_ID_DUP_CHK : `REQUEST_ACCOUNT_ID_DUP_CHK`,
    REQUEST_EMAIL_CHK : 'REQUEST_EMAIL_CHK',
    REQUEST_MBER_INFO : 'REQUEST_MBER_INFO'
}

const joinActions = {
    requestAccountIdDupChk: createAction<string>(joinTypes.REQUEST_ACCOUNT_ID_DUP_CHK),
    requestEmailChk: createAction<string>(joinTypes.REQUEST_EMAIL_CHK),
    requestJoinInfo: createAction<any>(joinTypes.REQUEST_MBER_INFO)
}



export {joinTypes, joinActions}
