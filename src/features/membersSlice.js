import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createResidentialApplication } from "../auth/authServices";

export const submitMemberApplication = createAsyncThunk(
  "members/submit",
  async (formData, { rejectWithValue }) => {
    try {
      return await createResidentialApplication(formData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Member application failed"
      );
    }
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetMembersState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitMemberApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitMemberApplication.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitMemberApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetMembersState } = membersSlice.actions;
export default membersSlice.reducer;
