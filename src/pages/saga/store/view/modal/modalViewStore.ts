import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommonModalInterface, RegModalInterface} from "../../../../../data/interface/modal/commonModalInterface";


interface Props {
    commonModalStatus: CommonModalInterface,
    regModalStatus: RegModalInterface,
}

const initialState = {
    commonModalStatus: {isOpen:false},
    regModalStatus: {isOpen:false},
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
    }
})

export const {
    updateCommonModalStatus,
    updateRegModalStatus,
} = modalViewStore.actions

export default modalViewStore.reducer
