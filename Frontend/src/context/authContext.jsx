import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [authName, setauthName] = useState(null)
    const [authEmail, setauthEmail] = useState(null)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const value = {
        authName,
        setauthName,
        authEmail,
        setauthEmail,
        isLoggedIn,
        setisLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}