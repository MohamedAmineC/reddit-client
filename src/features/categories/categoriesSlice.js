import { createSlice } from "@reduxjs/toolkit";
import gaming from './icons/gaming.png';
import sports from './icons/sports.png';
import business from './icons/business.png';
import crypto from './icons/crypto.png';
import tv from './icons/tv.png';
import celebrity from './icons/celebrity.png';

const initialState  =[
    {name: 'Gaming', icon: gaming},
    {name: 'Sports', icon: sports},
    {name: 'business economics and finance', icon: business },
    {name: 'Crypto', icon: crypto},
    {name: 'Television', icon: tv },
    {name: 'Celebrity', icon: celebrity},

]
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload);
        }
    }
})
export const selectCategories = state => state.categories;
export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;