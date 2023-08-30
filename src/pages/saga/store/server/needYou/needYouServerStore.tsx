import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NeedYou} from "../../../../../data/interface/needYou/needYouInterface";

interface Props {
    needYouList : Array<NeedYou> | null
    needYouSelect : NeedYou | null
}

const initialState = {
    needYouList: null,
    needYouSelect: null,
}

const needYouServerStore = createSlice({
    name: 'needYouServerStore',
    initialState,
    reducers: {
        updateNeedYouList: (state: Props, action: PayloadAction<Array<NeedYou>>) => {
            state.needYouList = action.payload
        },
        updateNeedYouSelect: (state: Props, action: PayloadAction<NeedYou>) => {
            state.needYouSelect = action.payload
        },
    }
})

export const {
    updateNeedYouList,
    updateNeedYouSelect,
} = needYouServerStore.actions

export default needYouServerStore.reducer
