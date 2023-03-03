import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './slice/PostSlice'
import UserInfoSlice from './slice/UserInfoSlice'

export const store = configureStore({
  reducer: { 
    userInfo:UserInfoSlice,
    post: PostSlice 
  },
})