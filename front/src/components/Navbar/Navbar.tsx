"use client"
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export const Navbar = () => {

  const context = useContext(AuthContext);
  const router = useRouter();
   if(context === null) {
    return null;
   }
   const {isLogin, setIsLogin} = context;

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
            <button onClick={handleLogout}>
                Cerrar sesion
            </button>
            </>
        ) : (
        <> <Link href="/login" className="transition-colors hover:text-purple-500">Entrar</Link>
        <Link href="/register" className="transition-colors hover:text-purple-500">Registar</Link>
        </> )
        }
       
        </div>
        </nav>
    );
};