import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, rememberMe } = action.payload;

      state.isAuthenticated = true;
      state.token = token;

      // Stocke le token selon le choix "Remember me"
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;

      // Nettoie le stockage
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
