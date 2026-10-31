"use client"
import { createContext, ReactNode, useState } from "react";

interface SearchContextType {
    buscar: string;
    setBuscar: (valor: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({children}: {children: ReactNode}) => {
    const [buscar, setBuscar] = useState("");

    return (
        <SearchContext.Provider value={{buscar, setBuscar}}>
            {children}
        </SearchContext.Provider>
    )
}