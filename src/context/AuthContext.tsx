'use client'
import { IUserSession } from "@/types";
import { useContext, createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie';

export interface IAuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void
}

export const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => {}
});

export interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<IUserSession | null>(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userSession")!)
        setUserData(userData)
    }, [])

    useEffect(() => {
        if(userData) {
            localStorage.setItem("userSession", JSON.stringify({token: userData.token, user: userData.user}))
            Cookies.set("userSession", JSON.stringify({token: userData.token, user: userData.user}))
        }
    }, [userData])
   
    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

//HOOK PARA USARLO
export const useAuth = () => useContext(AuthContext);


