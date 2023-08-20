import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NeedYou} from "../../../../../data/interface/needYou/needYouInterface";

interface Props {
    needYouList : Array<NeedYou> | null
}

const initialState = {
    needYouList: null,
}

const needYouServerStore = createSlice({
    name: 'needYouServerStore',
    initialState,
    reducers: {
        updateNeedYouList: (state: Props, action: PayloadAction<Array<NeedYou>>) => {
            state.needYouList = action.payload
        },
    }
})

export const {
    updateNeedYouList,
} = needYouServerStore.actions

export default needYouServerStore.reducer
