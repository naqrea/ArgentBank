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
        ...action.payload, // Fusionne les données du profil existant avec les nouvelles données
      };
    },
  },
});

export const { setProfile, updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
