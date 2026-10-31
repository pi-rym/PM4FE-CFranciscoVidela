"use client"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"
import { Product } from "@/types/Product"


export const AddToCartButton = ({product}: {product: Product}) => {   

    
    const context = useContext(CartContext);

    if(context === null) {
        return null
    }
    const {cart, setCart} = context
    const isInCart = cart.some((item) => item.product.id === product.id)
    
    const handlerAddToCart = () => {
       const existingItem = cart.find(
        (item) => item.product.id === product.id
       )

       if (existingItem === undefined) {
        setCart([...cart, {product: product}])
       }
    }

    return (          

        <button onClick={handlerAddToCart}
        disabled={isInCart}
        className="mt-6 w-full rounded-md bg-purple-700 px-4 py-3 font-semibold transition-colors hover:bg-purple-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 disabled:opacity-70">
            Agregar al carrito
        </button>
 
    )
}

