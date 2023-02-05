import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPostsByCategory = createAsyncThunk(
    'posts/fetchPostsByCategory',
    async (category) => {
        const response = await fetch(`https://www.reddit.com/r/${category}.json`);
        const json = await response.json();
        return json; 
    }
)
export const fetchPostsBySearchTerm = createAsyncThunk(
    'posts/fetchPostsBySearchTerm',
    async (term) => {
        const reponse = await fetch(`https://www.reddit.com/search.json?q=${term}`);
        const json = await reponse.json();
        return json; 
    }
)


const dataSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: false,
    },
    reducer:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPostsByCategory.pending, (state,action) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchPostsByCategory.fulfilled, (state,action) => {
            state.loading = false;
            state.error = false;
            state.posts = action.payload;
        })
        .addCase(fetchPostsByCategory.rejected, (state,action) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(fetchPostsBySearchTerm.pending, (state,action) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchPostsBySearchTerm.fulfilled, (state,action) => {
            state.loading = false;
            state.error = false;
            state.posts = action.payload;
        })
        .addCase(fetchPostsBySearchTerm.rejected, (state,action) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export const selectPosts = state => state.posts.posts;
export const selectPostsLoading = state => state.posts.loading;
export const selectPostsError = state => state.posts.error;
export default dataSlice.reducer;