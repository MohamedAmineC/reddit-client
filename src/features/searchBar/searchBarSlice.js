import { createSlice } from "@reduxjs/toolkit";


export const searchBarSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})
export const selectSearchTerm = state => state.searchTerm.searchTerm;
export const { setSearchTerm } = searchBarSlice.actions;
export default searchBarSlice.reducer;