import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Importer useSelector
import { login as apiLogin } from "../api/api";
import { login } from "../redux/slices/authSlice";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorTag = document.querySelector(".error");

  // Récupérer l'état d'authentification depuis Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Vérifie si l'utilisateur est déjà authentifié et redirige vers /user
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile"); // Redirige si l'utilisateur est authentifié
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await apiLogin(username, password);
      dispatch(login({ user: { username }, token, rememberMe }));
      navigate("/profile"); // Redirige vers /profile après une connexion réussie
    } catch (error) {
      console.error("Login failed", error);
      errorTag.style.display = "block";
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
          <span className="error">Error: invalid fields</span>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
