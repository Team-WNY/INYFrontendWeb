import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface Props {
    btnNumberValue : number
    btnNumberActive : boolean
}

const initialState = {

    btnNumberValue : 0,
    btnNumberActive : true,
}

const testViewStore = createSlice({
    name: 'testStore',
    initialState,
    reducers: {
        updateBtnNumberValue: (state: Props, action: PayloadAction<number>) => {
            state.btnNumberValue = action.payload
        },
        updateBtnNumberActive: (state: Props, action: PayloadAction<boolean>) => {
            state.btnNumberActive = action.payload
        }

    }
})

export const {
    updateBtnNumberValue,
    updateBtnNumberActive,
} = testViewStore.actions

export default testViewStore.reducer
