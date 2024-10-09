import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = {
        ...state.profile,
        ...action.payload, // Met à jour l'ensemble du profil
      };
    },
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
