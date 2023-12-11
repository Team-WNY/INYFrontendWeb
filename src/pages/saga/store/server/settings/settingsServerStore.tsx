import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Notice} from "../../../../../data/interface/settings/settingsInterface";

interface Props {
    noticeList : Array<Notice> | null
    noticeSelect : Notice | null
    isPasswordConfirm : boolean
}

const initialState = {
    noticeList: null,
    noticeSelect: null,
    isPasswordConfirm: false,
}

const settingsServerStore = createSlice({
    name: 'settingsServerStore',
    initialState,
    reducers: {
        updateNoticeList: (state: Props, action: PayloadAction<Array<Notice>>) => {
            state.noticeList = action.payload
        },
        updateNoticeSelect: (state: Props, action: PayloadAction<Notice>) => {
            state.noticeSelect = action.payload
        },
        updateIsPasswordConfirm: (state: Props, action: PayloadAction<boolean>) => {
            state.isPasswordConfirm = action.payload
        },
    }
})

export const {
    updateNoticeList,
    updateNoticeSelect,
    updateIsPasswordConfirm,
} = settingsServerStore.actions

export default settingsServerStore.reducer
