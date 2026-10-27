"use client"
import { Fragment, useContext, useEffect, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { CartContext } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { Card } from "@/components/Card/Card"


export default function Cart() {

    const authContext = useContext(AuthContext)
    const router = useRouter();
    const cartContext = useContext(CartContext)
    const [compra, setCompra] = useState("")
  
    
    useEffect(() => {
        
        if (authContext?.isLogin === false && authContext?.isLoading === false) {
            router.push("/login")
        }
    }, [authContext, router])
    
    if (authContext === null || cartContext === null) {
        return null
    }
    const {isLogin} = authContext;
        
        const {cart, setCart} = cartContext

        if(isLogin === false) {
            return null
        }

        const handlerOnClick = async() => {
            const products = cart.map((item) => item.product.id)
        const token = localStorage.getItem("token")

            if (!token) {
                return
            }

       const response = await fetch("http://localhost:3000/orders/", {
            method: "POST",
            headers: {
            Authorization: token,
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ products })
        })

        if (response.ok) {
            setCompra("¡Compra realizada con éxito!")
            setCart([])
        } else {
            setCompra("No se pudo realizar la compra.")
        }
    }



    return (
        <div>
            {cart.map((item)=> (
                <Fragment key={item.product.id}>
                <p>Cantidad: {item.quantity}</p>
                <Card
                    
                    product={item.product}
                    />
                </Fragment>
            ))}

            <button
            onClick={handlerOnClick}
            className="w-full rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-4 text-lg font-extrabold uppercase tracking-wider text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:from-purple-600 hover:to-purple-400 hover:shadow-xl hover:shadow-purple-700/30 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
            >
                🛍️ Comprar
            </button>
            {compra && <p>{compra}</p>}

        </div>
    )
}