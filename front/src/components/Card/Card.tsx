"use client"
import Link from "next/link";
import Image from "next/image";
// types
import { Product } from "../../types/Product"
import { ProductImage } from "../ProductImage/ProductImage";




export const Card = ({product}: {product: Product}) => {
   

    return(
      
        <article className="flex flex-col items-center rounded-xl border border-transparent bg-gray-900 p-5 shadow-lg transition-transform transition-colors hover:-translate-y-1 hover:border-purple-500">

        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="max-w-sm text-center text-gray-300 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-purple-300 mb-2">Precio: ${product.price}</p>
        <p className="text-sm text-gray-400">Stock: ${product.stock}</p>
        <ProductImage
        src={product.image}
        alt={product.name}
        fallbackSrc={
          product.name === "iPhone 11"
            ? "https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
            : product.name === "MacBook Air"
            ? "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            : product.name === "iPad Pro"
            ? "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
            : product.name === "Apple Watch Series 6"
            ? "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            : product.name === "AirPods Pro"
            ? "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1"
            : "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
        }
      />

        <Link
        href={`/products/${product.id}`}
        className="mt-4 rounded-md bg-purple-700 px-4 py-2 transition-colors hover:bg-purple-500"
        >
        Ver producto
        </Link>
        </article>

    );
}