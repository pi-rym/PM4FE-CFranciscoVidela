"use client"
import { Product } from "@/types/Product"
import { useState, useEffect, useContext } from "react"
import { Card } from "@/components/Card/Card"
import ItemList from "../../components/ItemList/ItemList"
import { SearchContext } from "@/context/SearchContextType"

export default function Home () {
    const searchContext = useContext(SearchContext);   
    
    const [products, setProducts] =useState<Product[]>([]);

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

        if(searchContext === null) {
            return null;
        }
        const {buscar} = searchContext;
            const filterProducts = products.filter((product) => 
                product.name.toLowerCase().includes(buscar.toLowerCase()))

    return(
        <main className="min-h-screen p-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
            <h1 className="text-3xl font-bold mb-6">
            Nuestros productos
            </h1>

        {filterProducts.length > 0 ? (<ItemList
            items= {filterProducts}
            renderCallback={(product) => <Card product={product}/>} 
            />): 
                ( <p className="text-white text-center mt-8">
                    No encontramos productos que coincidan con tu búsqueda.
                </p>)
            }
            
        </main>
    )
}