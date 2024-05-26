import { createReducer,createAction } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
}

export const LoginRequest = createAction('LoginRequest');
export const LoginSuccess = createAction('LoginSuccess');
export const LoginFailure = createAction('LoginFailure');
export const RegisterRequest = createAction('RegisterRequest');
export const RegisterSuccess = createAction('RegisterSuccess');
export const RegisterFailure = createAction('RegisterFailure');
export const LoadUserRequest = createAction('LoadUserRequest');
export const LoadUserSuccess = createAction('LoadUserSuccess');
export const LoadUserFailure = createAction('LoadUserFailure');

export const postOfFollowingRequest = createAction("postOfFollowingRequest");
export const postOfFollowingSuccess = createAction("postOfFollowingSuccess");
export const postOfFollowingFailure = createAction("postOfFollowingFailure");
export const clearErrors = createAction("clearErrors");

export const allUsersRequest = createAction('allUsersRequest');
export const allUsersSuccess = createAction('allUsersSuccess');
export const allUsersFailure = createAction('allUsersFailure');

export const LogoutUserRequest = createAction('LogoutUserRequest');
export const LogoutUserSuccess = createAction('LogoutUserSuccess');
export const LogoutUserFailure = createAction('LogoutUserFailure');

export const userProfileRequest = createAction('userProfileRequest');
export const userProfileSuccess = createAction('userProfileSuccess');
export const userProfileFailure = createAction('userProfileFailure');



export const userReducer =createReducer(initialState,
    (builder) => {
        builder
          .addCase(LoginRequest, (state) => {
            state.loading =true;
          })
          .addCase(LoginSuccess, (state, action) => {
            state.loading=false;
            state.user =action.payload;
            state.isAuthenticated =true;
          })
          .addCase(LoginFailure, (state, action) => {
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated =false;

          })
          .addCase(RegisterRequest, (state) => {
            state.loading =true;
            
          })
          .addCase(RegisterSuccess, (state, action) => {
            state.loading=false;
            state.user =action.payload;
            state.isAuthenticated =true;
          })
          .addCase(RegisterFailure, (state, action) => {
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated =false;
          })
          .addCase(LoadUserRequest, (state) => {
            state.loading =true;
          })
          .addCase(LoadUserSuccess, (state, action) => {
            state.loading=false;
            state.user =action.payload;
            state.isAuthenticated =true;
          })
          .addCase(LoadUserFailure, (state, action) => {
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated =false;
          })
          .addCase(clearErrors,(state)=>{
            state.error=null;
          })
          .addCase(LogoutUserRequest, (state) => {
            state.loading =true; 
          })
          .addCase(LogoutUserSuccess, (state) => {
            state.loading=false;
            state.user =null;
            state.isAuthenticated =false;
          })
          .addCase(LogoutUserFailure, (state, action) => {
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated =false;
          })
        }  
)

export const postOfFollowingReducer =createReducer(initialState,(builder)=>{
  builder
  .addCase(postOfFollowingRequest,(state)=>{
    state.loading=true;
  })
  .addCase(postOfFollowingSuccess,(state,action)=>{
    state.loading=false;
    state.posts =action.payload;
  })
  .addCase(postOfFollowingFailure,(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })
  .addCase(clearErrors,(state)=>{
    state.error=null;
  })
})

export const allUsersReducer =createReducer(initialState,(builder)=>{
  builder
  .addCase(allUsersRequest,(state)=>{
    state.loading=true;
  })
  .addCase(allUsersSuccess,(state,action)=>{
    state.loading=false;
    state.users =action.payload;
  })
  .addCase(allUsersFailure,(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })
  .addCase(clearErrors,(state)=>{
    state.error=null;
  })
})

export const userProfileReducer =createReducer(initialState,(builder)=>{
  builder
  .addCase(userProfileRequest,(state)=>{
    state.loading=true;
  })
  .addCase(userProfileSuccess,(state,action)=>{
    state.loading=false;
    state.user =action.payload;
  })
  .addCase(userProfileFailure,(state,action)=>{
    state.loading=false;
    state.error=action.payload;
  })
  .addCase(clearErrors,(state)=>{
    state.error=null;
  })
})