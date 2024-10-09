import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";

// Fonction pour charger le token depuis localStorage ou sessionStorage
function loadTokenFromStorage() {
  const tokenFromLocalStorage = localStorage.getItem("token");
  const tokenFromSessionStorage = sessionStorage.getItem("token");
  return tokenFromLocalStorage || tokenFromSessionStorage;
}

// Charger le token au démarrage
const token = loadTokenFromStorage();

// Précharger l'état initial avec le token récupéré
const preloadedState = {
  auth: {
    isAuthenticated: !!token,
    token: token || null,
    user: null,
  },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
  preloadedState, // Utilise le state préchargé ici
});
