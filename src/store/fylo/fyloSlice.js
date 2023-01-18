import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentPercent: 0,
}

export const fyloSlice = createSlice({
    name: 'fylo',
    initialState,
    reducers: {
        upload: (state, action) => {
            state.currentPercent += action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { upload } = fyloSlice.actions

export default fyloSlice.reducer