"use client"
import Link from "next/link";
// types
import { Product } from "../../types/Product"




export const Card = ({product}: {product: Product}) => {
   

    return(
        <article className="flex flex-col items-center rounded-xl border border-transparent bg-gray-900 p-5 shadow-lg transition-transform transition-colors hover:-translate-y-1 hover:border-purple-500">

        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="max-w-sm text-center text-gray-300 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-purple-300 mb-2">Precio: ${product.price}</p>
        <p className="text-sm text-gray-400">Stock: ${product.stock}</p>
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain mx-auto mt-4" />

        <Link
        href={`/products/${product.id}`}
        className="mt-4 rounded-md bg-purple-700 px-4 py-2 transition-colors hover:bg-purple-500"
        >
        Ver producto
        </Link>
        </article>

    );
}