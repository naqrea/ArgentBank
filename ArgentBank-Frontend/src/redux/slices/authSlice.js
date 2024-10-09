import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token, rememberMe } = action.payload;

      state.isAuthenticated = true;
      state.user = user;
      state.token = token;

      // Stocke le token selon le choix "Remember me"
      if (rememberMe) {
        sessionStorage.setItem("token", token);
      } else {
        localStorage.setItem("token", token);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // Nettoie le stockage
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
