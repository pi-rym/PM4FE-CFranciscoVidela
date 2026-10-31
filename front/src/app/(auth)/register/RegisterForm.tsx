"use client"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation";

export default function RegisterForm () {
    const router = useRouter();

    const inputStyles = "rounded-md border p-2";
    const labelStyles = "mb-1 block font-medium text-white";

    const [ form, setForm ] = useState({
     email: "", 
     password: "",
     name: "", 
     address: "", 
     phone: "",
    });

    const [message, setMessage] = useState("");

    const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const{name, value} = event.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    const handlerOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
                if (!emailValido) {
                alert("Por favor, ingresá un email válido");
                return;
            }

        if(!form.email || !form.password || !form.name || !form.address || !form.phone) {
            alert("falta completar un campo")  //implementar react toastify o sweetalert2
            return;
        } else {
            const response =await fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            });
            if(response.ok) {
                setMessage("Registro Exitoso");
                router.push("/login")
            } else {
                setMessage("No se pudo registrar el usuario")
            }
            const data = await response.json()
            console.log(data)
        }
    }
 

    return (
        <main className="flex min-h-screen items-center justify-center">
        <form noValidate onSubmit={handlerOnSubmit}
        className="w-full max-w-md rounded-lg border border-purple-500/30 bg-purple-950/40 p-6 shadow-lg">
            <div className="flex flex-col gap-4">

            <div>                
            <label className={labelStyles}>Email:</label>
            <input 
            type="email" 
            name="email"
            value={form.email}
            onChange={handlerInputChange}
            className={inputStyles} />
            </div>

            <div>
            <label className={labelStyles}>Password:</label>
            <input 
            type="password"
            name="password"
            value={form.password}
            onChange={handlerInputChange}
            className={inputStyles} />
            </div>

            <div>
            <label className={labelStyles}>Name:</label>
            <input 
            type="text" 
            name="name"
            value={form.name}
            onChange={handlerInputChange}
            className={inputStyles} />
            </div>

            <div>
            <label className={labelStyles}>Address:</label>
            <input 
            type="text" 
            name="address"
            value={form.address}
            onChange={handlerInputChange}
            className={inputStyles} />
            </div>
                
            <div>
            <label className={labelStyles}>Phone:</label>
            <input 
            type="number" 
            name="phone"
            value={form.phone}
            onChange={handlerInputChange}
            className={inputStyles} />
            </div>

            </div>

            <button type="submit"
            className="mt-2 w-full rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">Registrar</button>

            {message && <p>{message}</p>}
        </form>
        </main>
    )
};