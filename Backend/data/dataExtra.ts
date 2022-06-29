import untypedOffersExtra from "./dataJSON/extraOffers.json";
import { TypeProduct } from '../src/type/typeProduct'
import { TypeCart } from '../src/type/typeCart';
import { TypeOffer } from '../src/type/typeOffer'
import { AnyRule, CompositeRule, RuleLiteral } from '../src/type/typeRule';

export const rulesExtra: RuleLiteral[] = untypedOffersExtra.rules as RuleLiteral[];
export const offersExtra: TypeOffer[] = untypedOffersExtra.offers as TypeOffer[];


for (let rule of rulesExtra) {
    let newRule  = rule as CompositeRule
    let i = 0
    if (newRule.rules) {
        for (let rule of (newRule.rules as AnyRule[])) {
            if (typeof rule == "string") {

            } else {
                const newR = {
                    ...rule,
                    code: "codigoAleatorio" + i
                }
                rulesExtra.push(newR)
                newRule.rules[i] = "codigoAleatorio" + i

            }
            i += 1
        }
}

} 
for(let offer of offersExtra){
    rulesExtra.push(offer.rule as RuleLiteral);
}

untypedOffersExtra.offers.forEach(offer => {
    if (typeof offer.rule != "string") {

        offer.rule.rules.forEach((rule1, index1) => {
            if(typeof rule1 !== "string"){
                let i = 0
                if ((rule1 as any).rules) {
                    for(let r of (rule1 as any).rules) {
                        if(typeof r !== "string"){
                            const a = {
                                ...r,
                                code: r.description + i
                            } as RuleLiteral
                            
                            rulesExtra.push(a);
                            (rule1 as any).rules[i] = a.code;
                        }
                        i +=1
                    }
                } else {
                    const a = {
                        ...rule1,
                        code: rule1.description + index1
                    } as RuleLiteral
                    
                    rulesExtra.push(a);
                    (offer.rule as unknown as CompositeRule).rules[index1] = a.code;
                    return

                }
                
                if (typeof offer.rule != "string") {

                    offer.rule.rules[index1] = (rule1 as any).code;
                } 
                
                const ruleToPush = rule1 as RuleLiteral
                rulesExtra.push(ruleToPush);
            }
        });
    }
});