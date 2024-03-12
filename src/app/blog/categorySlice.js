import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchApi from "../../fetch";


export const getAllCategories = createAsyncThunk(
    'category/getallcategories', ()=>{
        return FetchApi.fetch("/api/category/get-all", {
            method:'GET',
        })
})


export const createCategory = createAsyncThunk(
    'category/createcategory', (data)=>{
        return FetchApi.fetch("/api/category/create", {
            method:'POST',
            body:data
        })
})

export const updateCategory = createAsyncThunk(
    'category/updateCategory', ({updates, categoryId})=>{
        return FetchApi.fetch(`/api/category/update/${categoryId}`, {
            method:'PATCH',
            body:updates
        })
})

export const deleteCategory = createAsyncThunk(
    'category/deleteCategory', ({ categoryId})=>{
        return FetchApi.fetch(`/api/category/delete/${categoryId}`, {
            method:'DELETE',
        })
})


const initialState = {
    categories:[]
}

const categorySlice = createSlice({
    name:"categoryslice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        }),
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.categories = [...state.categories, action.payload.savedCategory]
        }),
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.categories =  state.categories.map((category)=>{
                if(category._id === action.payload._id){
                    return action.payload
                }else{
                    return category;
                }
            })
        }),
        builder.addCase(deleteCategory.fulfilled, (state, {payload}) => {
            state.categories = state.categories.filter((category)=> category._id !== payload.categoryId)
        })
    }
})

const selectCategories = (state)=>state.category.categories

export {
    selectCategories
}
export default categorySlice.reducer