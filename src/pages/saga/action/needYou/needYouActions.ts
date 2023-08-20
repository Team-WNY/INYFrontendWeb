import {createAction} from "@reduxjs/toolkit";


const needYouTypes = {

    REQUEST_NEED_YOU_LIST : `REQUEST_NEED_YOU_LIST`,

}

const needYouActions = {

    requestStatisticsData: createAction<string>(needYouTypes.REQUEST_NEED_YOU_LIST)
}

export {needYouTypes, needYouActions}
