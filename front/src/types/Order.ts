import { Product } from "./Product";

export interface Order {
    id: number,
    status: string,
    date: string,
    products: Product[]
}