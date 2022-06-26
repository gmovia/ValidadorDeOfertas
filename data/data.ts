import { TypeProduct } from '../src/type/typeProduct'
import { TypeCart } from '../src/type/typeCart';
import { TypeOffer } from '../src/type/typeOffer'
import { RuleLiteral } from '../src/type/typeRule';

import untypedProducts from "./dataJSON/products.json";
import untypedCart from "./dataJSON/shoppingCart.json";
import untypedRulesAndOffers from "./dataJSON/offersAndRules.json";

export const products: TypeProduct[] = untypedProducts as TypeProduct[];
export const cart: TypeCart = untypedCart as TypeCart;
export const rules: RuleLiteral[] = untypedRulesAndOffers.rules as RuleLiteral[];
export const offers: TypeOffer[] = untypedRulesAndOffers.offers as TypeOffer[];



for(let offer of offers){
    rules.push(offer.rule as RuleLiteral);
}

untypedRulesAndOffers.offers.forEach(offer => {
    // element can be a string or an object
    offer.rule.rules.forEach((element, index) => {
        //if element is not a string, replace it with its code and push it into rules
        if(typeof element !== "string"){
            const rule = element as RuleLiteral
            rules.push(rule);
            offer.rule.rules[index] = rule.code;
        }
    });
});

untypedRulesAndOffers.offers.forEach(offer => {
    // element can be a string or an object
    offer.rule.rules.forEach((element, index) => {
        //if element is not a string, replace it with its code and push it into rules
        if(typeof element !== "string"){
            const rule = element as RuleLiteral
            rules.push(rule);
            offer.rule.rules[index] = rule.code;
        }
    });
});
