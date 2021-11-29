import { createContext, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(null);


    const handleAuth = (info) => {
        setAuth(info)
    }

    return (
        <AuthContext.Provider value={{auth, handleAuth}}>
            {children}
        </AuthContext.Provider>
    );
};