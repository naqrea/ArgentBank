import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route publique pour SignIn */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* Route protégée pour /user */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User /> {/* Composant accessible uniquement si connecté */}
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
