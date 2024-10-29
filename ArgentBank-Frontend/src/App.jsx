import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile /> {/* Composant accessible uniquement si connecté */}
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
