import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ModalInterface} from "../../../../../data/interface/modal/modalInterface";


interface Props {
    modalStatus: ModalInterface,
}

const initialState = {
    modalStatus: {isOpen:false},
}

const modalViewStore = createSlice({
    name: 'modalViewStore',
    initialState,
    reducers: {
        updateModalStatus: (state: Props, action: PayloadAction<ModalInterface>) => {
            state.modalStatus = action.payload
        },
    }
})

export const {
    updateModalStatus,
} = modalViewStore.actions

export default modalViewStore.reducer
