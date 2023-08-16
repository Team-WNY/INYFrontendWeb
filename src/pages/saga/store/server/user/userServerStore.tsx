import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfo} from "../../../../../data/interface/user/userInterface";


interface Props {
    userInfo: UserInfo
}

const initialState = {
    userInfo: null,
}

const userServerStore = createSlice({
    name: 'userServerStore',
    initialState,
    reducers: {
        updateUserInfo: (state: Props, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload
        },
    }
})

export const {
    updateUserInfo,
} = userServerStore.actions

export default userServerStore.reducer

