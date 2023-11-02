import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Notice} from "../../../../../data/interface/settings/settingsInterface";

interface Props {
    noticeList : Array<Notice> | null
}

const initialState = {
    noticeList: null,
}

const settingsServerStore = createSlice({
    name: 'settingsServerStore',
    initialState,
    reducers: {
        updateNoticeList: (state: Props, action: PayloadAction<Array<Notice>>) => {
            state.noticeList = action.payload
        },
    }
})

export const {
    updateNoticeList,
} = settingsServerStore.actions

export default settingsServerStore.reducer
