import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Vérifie l'état de connexion

  return isAuthenticated ? children : <Navigate to="/sign-in" />; // Si pas authentifié, redirige vers /signin
};

export default PrivateRoute;
