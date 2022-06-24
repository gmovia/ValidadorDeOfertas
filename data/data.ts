import { TypeProduct } from '../src/type/typeProduct'
import { TypeCart } from '../src/type/typeCart';
import { TypeOffer } from '../src/type/typeOffer'
import { RuleLiteral } from '../src/type/typeRule';

import untypedProducts from "./dataJSON/products.json";
import untypedCart from "./dataJSON/shoppingCart.json";
import untypedRulesAndOffers from "./dataJSON/ofertasYreglas.json";

export const products: TypeProduct[] = untypedProducts as TypeProduct[];
export const cart: TypeCart = untypedCart as TypeCart;
export const rules: RuleLiteral[] = untypedRulesAndOffers.rules as RuleLiteral[];
export const offers: TypeOffer[] = untypedRulesAndOffers.offers as TypeOffer[];
