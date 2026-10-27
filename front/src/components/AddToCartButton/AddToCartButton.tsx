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
    
    const handlerAddToCart = () => {
       
        const existingItem = cart.find((item) => item.product.id === product.id)
        if (existingItem !== undefined) {
        setCart(cart.map((item) => {
            if(item.product.id === product.id) {
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })) 
        } else {
            setCart([...cart, {product: product, quantity: 1}])
        }
    }

    return (
        <button onClick={handlerAddToCart}
        className="mt-6 w-full rounded-md bg-purple-700 px-4 py-3 font-semibold transition-colors hover:bg-purple-500">
            Agregar al carrito
        </button>
    )
}

