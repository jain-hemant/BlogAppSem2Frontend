import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name:"authslice",
    initialState,
    reducers:{
        setIsAuth:(state, {payload})=>{
            state.isAuthenticated =  payload.isAuthenticated;
            state.user =  payload.user;
        },
        logOut:(state)=>{
            state.isAuthenticated = false;
            state.user=null
        }
    },
})

const selectIsAuth = (state)=> state.auth.isAuthenticated
const selectUser = (state)=> state.auth.user
const {setIsAuth, logOut} = authSlice.actions

 export {
    selectIsAuth,
    setIsAuth,
    selectUser, 
    logOut
 }

export default authSlice.reducer