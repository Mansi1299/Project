import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './slice/PostSlice'


export const store = configureStore({
  reducer: { 
    
    post: PostSlice 
  },
})