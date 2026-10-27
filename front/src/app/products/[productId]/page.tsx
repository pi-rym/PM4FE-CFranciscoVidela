import { Product } from "@/types/Product";
import ProductsDetail from "./ProductDetail";



export const generateStaticParams = async () =>{
    const response = await fetch ("http://localhost:3000/products")
    const data: Product[] = await response.json()

    const params = data.map((item) => {
      return {
        productId: String(item.id),
      };
    });
    return params;
}
 
export default async function Products({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {

  const { productId } = await params;
  
  const response = await fetch("http://localhost:3000/products");

  const data: Product[] = await response.json();

  const product = data.find((item) => item.id === Number(productId));
  

  return (
    <ProductsDetail product={product}/>
  );
}