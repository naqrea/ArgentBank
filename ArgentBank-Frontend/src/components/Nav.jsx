import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Récupére l'état d'authentification
  const profile = useSelector((state) => state.profile.profile); // Récupérer le profil depuis le store

  const handleLogout = () => {
    dispatch(logout()); // Appelle l'action de déconnexion
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"> </i>
              {profile && profile.userName ? profile.userName : "User"}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"> </i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"> </i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
