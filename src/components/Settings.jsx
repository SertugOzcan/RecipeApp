/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { UserPreferencesContext } from "../context/UserPreferencesContext";
import axios from "axios";

const Settings = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            "Authorization": `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => {
          console.log(response);
          setUser(response.data);
        });
    };
    getUserProfile();
  }, []);

  return (
    <div className="settings">
      <div className="theme-opt">
        <label>Theme:</label>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
      <div className="user-card">
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
      </div>
    </div>
  );
};

export default Settings;
