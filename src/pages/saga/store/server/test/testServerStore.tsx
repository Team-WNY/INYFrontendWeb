import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface Props {
    testString : string|null,
    isActive : boolean
}

const initialState = {
    testString: null,
    isActive: false,
}

const testServerStore = createSlice({
    name: 'testStore',
    initialState,
    reducers: {
        updateTestString: (state: Props, action: PayloadAction<string|null>) => {
            state.testString = action.payload
        },
        updateIsActive: (state: Props, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        },
    }
})

export const {
    updateTestString,
    updateIsActive,
} = testServerStore.actions

export default testServerStore.reducer

