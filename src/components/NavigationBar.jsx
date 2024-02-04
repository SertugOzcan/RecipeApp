/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { UserPreferencesContext } from '../context/UserPreferencesContext';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const ThemeSlider = () => {

    const {theme, toggleTheme} = useContext(UserPreferencesContext)

  return(
    <label>
      <input className="toggle-checkbox" type="checkbox" onChange={toggleTheme} />
      <div className={`toggle-slot ${theme}`}>
        <div className="sun-icon-wrapper">
          <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
        </div>
      </div>
    </label>
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