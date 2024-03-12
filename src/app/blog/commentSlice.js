import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchApi from "../../fetch";


export const getAllCommentsByBlog = createAsyncThunk(
    'comment/getallComment', (blogId) => {
        return FetchApi.fetch(`/api/comment/get-all/${blogId}`, {
            method: 'GET',
        })
    })


export const createComment = createAsyncThunk(
    'comment/createComment', (data) => {
        return FetchApi.fetch("/api/comment/create", {
            method: 'POST',
            body: data
        })
    })

export const updateComment = createAsyncThunk(
    'comment/updateComment', ({ updates, commentId }) => {
        return FetchApi.fetch(`/api/comment/update/${commentId}`, {
            method: 'PATCH',
            body: updates
        })
    })

export const deleteComment = createAsyncThunk(
    'comment/deleteComment', ({ commenId }) => {
        return FetchApi.fetch(`/api/comment/delete/${commenId}`, {
            method: 'DELETE',
        })
    })


const initialState = {
    comments: {}
}

const commentSlice = createSlice({
    name: "commentslice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllCommentsByBlog.fulfilled, (state, action) => {
            const { blogId, comments } = action.payload
            state.comments[blogId] = comments
        }),
            builder.addCase(createComment.fulfilled, (state, action) => {
                console.log(action.payload);
                state.comments[action.payload.blog] = state.comments[action.payload.blog] ? [action.payload, ...state.comments[action.payload.blog]] : [action.payload]
            }),
            builder.addCase(updateComment.fulfilled, (state, action) => {
                state.comments = state.comments.map((comment) => {
                    if (comment._id === action.payload._id) {
                        return action.payload
                    } else {
                        return comment;
                    }
                })
            }),
            builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
                state.comments = state.comments.filter((comment) => comment._id !== payload.commentId)
            })
    }
})

const selectAllComments = (state) => state.comment.comments

export {
    selectAllComments
}
export default commentSlice.reducer