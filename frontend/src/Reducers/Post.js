import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState ={}

export const likeRequest = createAction('likeRequest');
export const likeSuccess = createAction('likeSuccess');
export const likeFailure = createAction('likeFailure');
export const clearErrors = createAction('clearErrors');
export const clearMessage = createAction('clearMessage');
export const addCommentRequest = createAction('addCommentRequest');
export const addCommentSuccess = createAction('addCommentSuccess');
export const addCommentFailure = createAction('addCommentFailure');
export const deleteCommentRequest = createAction('deleteCommentRequest');
export const deleteCommentSuccess = createAction('deletCommentSuccess');
export const deleteCommentFailure = createAction('deleteCommentFailure');
export const myPostsRequest = createAction('myPostsRequest');
export const myPostsSuccess = createAction('myPostsSuccess');
export const myPostsFailure = createAction('myPostsFailure');
export const newPostRequest = createAction('newPostRequest');
export const newPostSuccess = createAction('newPostSuccess');
export const newPostFailure = createAction('newPostFailure');
export const updateCaptionRequest = createAction('updateCaptionRequest');
export const updateCaptionSuccess = createAction('updateCaptionSuccess');
export const updateCaptionFailure = createAction('updateCaptionFailure');
export const deletePostRequest = createAction('deletePostRequest');
export const deletePostSuccess = createAction('deletePostSuccess');
export const deletePostFailure = createAction('deletePostFailure');
export const updateProfileRequest = createAction('updateProfileRequest');
export const updateProfileSuccess = createAction('updateProfileSuccess');
export const updateProfileFailure = createAction('updateProfileFailure');
export const updatePasswordRequest = createAction('updatePasswordRequest');
export const updatePasswordSuccess = createAction('updatePasswordSuccess');
export const updatePasswordFailure = createAction('updatePasswordFailure');
export const deleteProfileRequest = createAction('deleteProfileRequest');
export const deleteProfileSuccess = createAction('deleteProfileSuccess');
export const deleteProfileFailure = createAction('deleteProfileFailure');
export const forgotPasswordRequest = createAction('forgotPasswordRequest');
export const forgotPasswordSuccess = createAction('forgotPasswordSuccess');
export const forgotPasswordFailure = createAction('forgotPasswordFailure');
export const resetPasswordRequest = createAction('resetPasswordRequest');
export const resetPasswordSuccess = createAction('resetPasswordSuccess');
export const resetPasswordFailure = createAction('resetPasswordFailure');
export const userPostsRequest = createAction('userPostsRequest');
export const userPostsSuccess = createAction('userPostsSuccess');
export const userPostsFailure = createAction('userPostsFailure');
export const followUserRequest = createAction('followUserRequest');
export const followUserSuccess = createAction('followUserSuccess');
export const followUserFailure = createAction('followUserFailure');



export const likeReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(likeRequest,(state)=>{
          state.loading=true;
        })
        .addCase(likeSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(likeFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(addCommentRequest,(state)=>{
          state.loading=true;
        })
        .addCase(addCommentSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(addCommentFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(deleteCommentRequest,(state)=>{
          state.loading=true;
        })
        .addCase(deleteCommentSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(deleteCommentFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })

        .addCase(newPostRequest,(state)=>{
          state.loading=true;
        })
        .addCase(newPostSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(newPostFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(updateCaptionRequest,(state)=>{
          state.loading=true;
        })
        .addCase(updateCaptionSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(updateCaptionFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(deletePostRequest,(state)=>{
          state.loading=true;
        })
        .addCase(deletePostSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(deletePostFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(updateProfileRequest,(state)=>{
          state.loading=true;
        })
        .addCase(updateProfileSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(updateProfileFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(updatePasswordRequest,(state)=>{
          state.loading=true;
        })
        .addCase(updatePasswordSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(updatePasswordFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(deleteProfileRequest,(state)=>{
          state.loading=true;
        })
        .addCase(deleteProfileSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(deleteProfileFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(forgotPasswordRequest,(state)=>{
          state.loading=true;
        })
        .addCase(forgotPasswordSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(forgotPasswordFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(resetPasswordRequest,(state)=>{
          state.loading=true;
        })
        .addCase(resetPasswordSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(resetPasswordFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })
        .addCase(followUserRequest,(state)=>{
          state.loading=true;
        })
        .addCase(followUserSuccess,(state,action)=>{
          state.loading=false;
          state.message =action.payload;
        })
        .addCase(followUserFailure,(state,action)=>{
          state.loading=false;
          state.error=action.payload;
        })

        .addCase(clearErrors,(state)=>{
          state.error=null;
        })
        .addCase(clearMessage,(state)=>{
            state.message = null;
        })
      }
)

export const myPostsReducer =createReducer(initialState,
  (builder)=>{
      builder
      .addCase(myPostsRequest,(state)=>{
        state.loading =true;
      })
      .addCase(myPostsSuccess,(state,action)=>{
        state.loading =false;
        state.posts =action.payload;
      })
      .addCase(myPostsFailure,(state,action)=>{
        state.loading =false;
        state.error =action.payload;
      })
      .addCase(clearErrors,(state)=>{
        state.error=null;
      })
})

export const userPostsReducer =createReducer(initialState,
  (builder)=>{
      builder
      .addCase(userPostsRequest,(state)=>{
        state.loading =true;
      })
      .addCase(userPostsSuccess,(state,action)=>{
        state.loading =false;
        state.posts =action.payload;
      })
      .addCase(userPostsFailure,(state,action)=>{
        state.loading =false;
        state.error =action.payload;
      })
      .addCase(clearErrors,(state)=>{
        state.error=null;
      })
})