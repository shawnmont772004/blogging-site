import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    currentUser:null,
    loading:false,
    error:null
};

const userSlice=createSlice(
    {
        name:"user_reducer",
        initialState,
        reducers: {
            signInStart : (state) =>{
                state.loading =true
            },
            signInSuccess : (state,action)=>{
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            },
            signInFailure : (state,action) =>{
                state.loading = true
                state.error = action.payload;
            }


        }
    }
)

export const {signInSuccess,signInStart,signInFailure} = userSlice.actions;
export default userSlice.reducer;