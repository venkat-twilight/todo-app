import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userService = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(`https://reqres.in/api/users`);
  return await response.json();
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userService.pending, (state, { payload }) => {
      state.loading = true;
      state.data = payload;
    });
    builder.addCase(userService.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(userService.rejected, (state, action) => {
      state.error = action.error;
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
