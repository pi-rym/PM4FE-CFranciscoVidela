"use client"
import { Product } from "@/types/Product"
import { useState, useEffect } from "react"
import { Card } from "@/components/Card/Card"
import ItemList from "../../components/ItemList/ItemList"

export default function Home () {

    const [products, setProducts] =useState<Product[]>([])

    useEffect(() => {
        const getProducts = async () =>{
            const response = await fetch ("http://localhost:3000/products")
            console.log(response)
            const data = await response.json()
            console.log(data)

            setProducts(data)
        }
        getProducts()

    }, []);

    return(
        <main className="min-h-screen p-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
            <h1 className="text-3xl font-bold mb-6">
            Nuestros productos
            </h1>

            <ItemList
            items= {products}
            renderCallback={(product) => <Card product={product}/>} 
            />
        </main>
    )
}