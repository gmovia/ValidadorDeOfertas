import { TypeProduct } from '../src/type/typeProduct'
import { TypeCart } from '../src/type/typeCart';


import untypedProducts from "./dataJSON/products.json";
import untypedCart from "./dataJSON/shoppingCart.json";


export const products: TypeProduct[] = untypedProducts as TypeProduct[];
export const cart: TypeCart = untypedCart as TypeCart;


