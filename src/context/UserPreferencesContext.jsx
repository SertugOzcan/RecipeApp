/* eslint-disable react/prop-types */
import {createContext, useState} from 'react'

export const UserPreferencesContext = createContext()

export const UserPreferencesProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')


    return(
        <UserPreferencesContext.Provider value={{theme, toggleTheme}}>
            {children}
        </UserPreferencesContext.Provider>
    )

}