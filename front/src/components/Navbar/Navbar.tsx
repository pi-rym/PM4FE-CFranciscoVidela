"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { SearchContext } from "@/context/SearchContextType";

export const Navbar = () => {
  
  const searchContext = useContext(SearchContext);  
  const context = useContext(AuthContext);
  const router = useRouter();
   if(context === null) {
    return null;
   }
   if(searchContext === null){
    return null;
   }
   const {isLogin, setIsLogin} = context;
   const {buscar, setBuscar} = searchContext;

   const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false)
    router.push("/home")

   }

    return (
        <nav className="w-full p-4 flex flex-col md:flex-row items-center gap-8 flex-wrap bg-gradient-to-l from-purple-900 to-black" >
        <Link href="/home" className="font-bold text-xl">CikoStore</Link>   
        <div className="flex gap-4">
        <Link href="/home" className="transition-colors hover:text-purple-500">Home</Link>
        
        {isLogin ? ( 
            <>
            <Link href="/cart">Carrito</Link>
            <Link href="/dashboard">dashboard</Link> 
            <button onClick={handleLogout}
            className="cursor-pointer">
                Cerrar sesion
            </button>            
            
            </>
        ) : (
        <> <Link href="/login" className="transition-colors hover:text-purple-500">Entrar</Link>
        <Link href="/register" className="transition-colors hover:text-purple-500">Registar</Link>
        </> )
        }        
       <input placeholder="Buscar productos"
       className="border border-purple-900 rounded-md px-2"
       value={buscar} 
       onChange={(e) => setBuscar(e.target.value)}/>
       
        </div>        
        </nav>
    );
};