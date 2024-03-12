import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../../fetch";

export const getAllBlogs = createAsyncThunk(
    "blog/getallblog",
    ()=> {
        return fetchApi.fetch(`/api/blog/get-all`, {
        method: "GET",
        })
    }
)
export const getAllBlogsByCategory = createAsyncThunk(
    "blog/getallblog-byCategory",
    (categoryId)=> {
        return fetchApi.fetch(`/api/blog/get-all/${categoryId}`, {
        method: "GET",
        })
    }
)

export const createBlog = createAsyncThunk(
    "blog/createblog",
    (data)=>{
        return fetchApi.fetch("/api/blog/create", {
            method: "POST",
            body: data
        })
    }
)

export const initialState = {
    blogs:[],
    blogsByCategories:{}
}

const blogSlice = createSlice({
    name:"blogslice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(createBlog.fulfilled, (state, action)=>{
            state.blogs = [...state.blogs, action.payload]
        });
        builder.addCase(getAllBlogs.fulfilled, (state, action)=>{
            state.blogs = action.payload
        });
         builder.addCase(getAllBlogsByCategory.fulfilled, (state, {payload})=>{
            state.blogsByCategories[payload.categoryId] = payload.blogs
        })
    }
})

const selectBlogs = (state)=>state.blog.blogs;
const selectBlogsByCategory = (state)=>state.blog.blogsByCategories

export {
    selectBlogs,
    selectBlogsByCategory
}
export default blogSlice.reducer