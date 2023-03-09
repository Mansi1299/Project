import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: {
    data: [],
    status: "",
    loading: false,
  },
  userInfo: {
    data: [],
    status: "",
    loading: false,
  },
};

export const GetPosts = createAsyncThunk("Getpost", async (userId, thunkAPI) => {
    console.log(userId)
    try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return data.data
    }
    catch(e){
      return  thunkAPI.rejectWithValue(e)
    }

});


export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [GetPosts.pending]: (state, action) => {
        state.post.loading = true
    },
    [GetPosts.fulfilled]: (state, action) => {
        state.post.loading = false;
        state.post.data = action.payload;
        state.post.status = "success"
    },
    [GetPosts.rejected]: (state, action) => {
        state.post.loading = false;
        state.post.status = "failure"
    },
  },
});

// Action creators are generated for each case reducer function
export const {  } = PostSlice.actions;

export default PostSlice.reducer;