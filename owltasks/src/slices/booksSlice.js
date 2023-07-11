import {createSlice} from '@reduxjs/toolkit'

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
    },
    reducers: {
        set: (state, action) => {
            state.books = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {push, remove, set} = booksSlice.actions

export default booksSlice.reducer
