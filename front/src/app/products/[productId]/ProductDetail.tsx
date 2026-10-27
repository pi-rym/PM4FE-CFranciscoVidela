"use client"
import { AddToCartButton } from "@/components/AddToCartButton/AddToCartButton";
import { Card } from "@/components/Card/Card";
import { AuthContext } from "@/context/AuthContext";
import { Product } from "@/types/Product";
import { useContext } from "react";

export default function ProductsDetail({
  product,
}: {
  product?: Product
}) {

  const contextAuth = useContext(AuthContext);

    if(contextAuth === null) {
        return null
    }
    const { isLogin } = contextAuth;

  
  if (!product) {
    return <span>producto no encontrado</span>
  }

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <h1 className="text-3xl font-bold text-center mb-8">
      Detalle del producto
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl">
      <Card product={product}/>
      {isLogin? <AddToCartButton product={product}/>: null}
      
        </div>
      </div>
    </main>
  );
}