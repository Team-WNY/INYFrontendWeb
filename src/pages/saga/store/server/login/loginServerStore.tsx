import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfo} from "../../../../../data/interface/user/userInterface";


interface Props {
    isLogin: boolean
}

const initialState = {
    isLogin: false,
}

const loginServerStore = createSlice({
    name: 'loginServerStore',
    initialState,
    reducers: {
        updateIsLogin: (state: Props, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
        },
    }
})

export const {
    updateIsLogin,
} = loginServerStore.actions

export default loginServerStore.reducer

