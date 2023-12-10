import { createSlice } from "@reduxjs/toolkit"

const initialSate ={
    currentUser:null,
    loading:false,
    error:false
};

const userSlice=createSlice(
    {
        name:"user_reducers",
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