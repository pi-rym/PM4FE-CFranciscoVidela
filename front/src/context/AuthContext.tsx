"use client"
import { User } from "@/types/User";
import { createContext, useState, ReactNode, useEffect } from "react"

interface AuthContextType {
    isLogin: boolean,
    setIsLogin: (valor : boolean) => void,
    user: User | null,
    setUser: (valor: User | null) => void
    isLoading: boolean,
    setIsLoading: (valor: boolean) => void,
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState<User | null>(null)
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user")
        
        if (user) {
            const userData = JSON.parse(user);
            setUser(userData)
        }

        if (token) {
            setIsLogin(true);
        } setIsLoading(false)
    }, []);
    return (
        <AuthContext.Provider value= {{isLogin, setIsLogin, user, setUser, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

