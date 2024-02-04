/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import "./App.css";
import { ApiContextProvider } from "./context/ApiContext";
import { UserPreferencesContext } from "./context/UserPreferencesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import PrivateRoute from "./services/PrivateRoute";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const { theme } = useContext(UserPreferencesContext);

  return (
    <AuthContextProvider>
      <Router>
        <div className={`App ${theme} `}>
          <NavigationBar />
          <ApiContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe-list" element={<RecipeList />} />
              <Route
                path="/settings"
                element={<PrivateRoute element={<Settings />} />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </ApiContextProvider>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
