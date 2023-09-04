import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NeedYou} from "../../../../../data/interface/needYou/needYouInterface";

interface Props {
    isAccountIdDupCheck : boolean | null,
    isUpdateIsEmailCheck : boolean | null
}

const initialState = {
    isAccountIdDupCheck: null,
    isUpdateIsEmailCheck : null
}

const joinServerStore = createSlice({
    name: 'joinServerStore',
    initialState,
    reducers: {
        updateIsAccountIdDupCheck: (state: Props, action: PayloadAction<boolean>) => {
            state.isAccountIdDupCheck = action.payload
        },
        updateIsEmailCheck: (state: Props, action: PayloadAction<boolean>) => {
            state.isUpdateIsEmailCheck = action.payload
        }
    }
})

export const {
    updateIsAccountIdDupCheck,
    updateIsEmailCheck
} = joinServerStore.actions

export default joinServerStore.reducer
