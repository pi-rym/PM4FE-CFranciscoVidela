"use client"
import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm () {
    const router = useRouter();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")

    const context = useContext(AuthContext);

    if (context === null) {
        return null;
    }
 
    const { setIsLogin, setUser } = context;


    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (email === "") {
            console.log("El email es obligatorio")
            return;
        }
        if (password === "") {
            console.log("El password es obligatorio")
            return;
        }
        console.log("Submit exitoso");
        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    email,
                    password,
                }),
        });
        const data = await response.json();
        console.log("STATUS:", response.status);
console.log("DATA:", data);

        
        if(response.ok){

            const {id, name, email, address, phone, role} = data.user

            const user = {
                id,
                name,
                email,
                address,
                phone,
                role
            }

            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            setIsLogin(true)
            setUser(data.user)
            setMessage("Inicio de sesión exitoso");
            router.push("/dashboard")
        } else {
            setMessage("No se pudo iniciar sesión");
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center">

        <form 
        onSubmit={handlerSubmit}
        className="w-full max-w-md rounded-lg border border-purple-500/30 bg-purple-950/40 p-6 shadow-lg"
        >
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
                Iniciar Sesión
            </h2>
            <div className="flex flex-col gap-4">
                <label htmlFor="email"
                className="mb-1 block font-medium text-white">Email:</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
                className="rounded-md border p-2"/>

                <label htmlFor="password"
                className="mb-1 block font-medium text-white">Password:</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-md border p-2" />
            </div>
            <button type="submit"
            className="mt-2 w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">INICIAR SESION</button>

            {message && <p>{message}</p>}
        </form>
        </main>
);
};


