import { Card } from "@/components/Card/Card";
import ItemList from "@/components/ItemList/ItemList";
import {products} from "../Products/products"


export default function Home() {
  return (
    <main>
      <h1>Mi Tienda</h1>
      <p>Bienvenidos a nuestra tienda</p>

      
        <ItemList 
        items = {products}
        renderCallback={(product) => <Card product={product}/>}

        />
      
    </main>
  );
}
