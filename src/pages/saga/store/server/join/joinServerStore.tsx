import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NeedYou} from "../../../../../data/interface/needYou/needYouInterface";

interface Props {
    isAccountIdDupCheck : boolean
}

const initialState = {
    isAccountIdDupCheck: false,
}

const joinServerStore = createSlice({
    name: 'joinServerStore',
    initialState,
    reducers: {
        updateIsAccountIdDupCheck: (state: Props, action: PayloadAction<boolean>) => {
            state.isAccountIdDupCheck = action.payload
        },
    }
})

export const {
    updateIsAccountIdDupCheck,
} = joinServerStore.actions

export default joinServerStore.reducer
