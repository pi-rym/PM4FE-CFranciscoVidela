"use client"
import { useState, createContext, ReactNode, useEffect } from "react";
import { CartItem } from "@/types/CartItem";

interface CartContextType {
    cart: CartItem[]
    setCart: (cart: CartItem[]) => void;
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>([])
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const cartData = localStorage.getItem("cart")
        console.log(cartData)

        if (cartData) {
            const parsedCart = JSON.parse(cartData)
            setCart(parsedCart)
        }

        setIsInitialized(true)
    }, [])

    // Guardar carrito
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, isInitialized])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}