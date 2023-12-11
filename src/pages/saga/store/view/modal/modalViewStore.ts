import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommonModalInterface, RegModalInterface, SettingsModalInterface} from "../../../../../data/interface/modal/commonModalInterface";


interface Props {
    commonModalStatus: CommonModalInterface,
    regModalStatus: RegModalInterface,
    settingsModalStatus: SettingsModalInterface,
}

const initialState = {
    commonModalStatus: {isOpen:false},
    regModalStatus: {isOpen:false},
    settingsModalStatus: {isOpen:false, title:"환경설정", isShowNotice: false},
}

const modalViewStore = createSlice({
    name: 'modalViewStore',
    initialState,
    reducers: {
        updateCommonModalStatus: (state: Props, action: PayloadAction<CommonModalInterface>) => {
            state.commonModalStatus = action.payload
        },
        updateRegModalStatus: (state: Props, action: PayloadAction<RegModalInterface>) => {
            state.regModalStatus = action.payload
        },
        updateSettingsModalStatus: (state: Props, action: PayloadAction<SettingsModalInterface>) => {
            state.settingsModalStatus = action.payload
       },
    }
})

export const {
    updateCommonModalStatus,
    updateRegModalStatus,
    updateSettingsModalStatus,
} = modalViewStore.actions

export default modalViewStore.reducer
