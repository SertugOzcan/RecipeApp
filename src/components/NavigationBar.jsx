/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UserPreferencesContext } from '../context/UserPreferencesContext';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const ThemeSlider = () => {

    const {theme, toggleTheme} = useContext(UserPreferencesContext)

  return(
    <div onClick={toggleTheme} className={`slider-container ${theme}`}>
      <div className="slider-button"></div>
    </div>
  )
}



const NavigationBar = () => {

  const {logout, isAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  return (
    <nav className="navigation-bar">
      <div className="logo">Recipe Platform</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/recipe-list">Recipe List</Link>
        <Link to="/settings">Settings</Link>
        
        <button onClick={isAuthenticated ? handleLogout : handleLogin} >{isAuthenticated ? "Logout" : "Login"} </button>
        <ThemeSlider/>
      </div>
    </nav>
  );
};

export default NavigationBar;
