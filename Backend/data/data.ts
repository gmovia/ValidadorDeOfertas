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
    offer.rule.rules.forEach((rule, index1) => {
        if(typeof rule !== "string"){
            let i = 0
            for(let r of rule.rules) {
                if(typeof r !== "string"){
                    const a = {
                        ...r,
                        code: r.description + i
                    } as RuleLiteral
                    
                    rules.push(a);
                    rule.rules[i] = a.code;
                }
                i +=1
            }
            const ruleToPush = rule as RuleLiteral
            rules.push(ruleToPush);
            offer.rule.rules[index1] = rule.code;
        }
    });
});


