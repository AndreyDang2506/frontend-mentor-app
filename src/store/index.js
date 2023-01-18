import { configureStore } from '@reduxjs/toolkit'
import fyloReducer from './fylo/fyloSlice'
export const store = configureStore({
    reducer: {
        fylo: fyloReducer
    }
})