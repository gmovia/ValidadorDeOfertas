import { Rule } from "../rule/rule";
import { Discount } from "../discount/discount"
import { PurchasedProduct } from "../objectRule/purchasedProduct";

export class Offer{

    private description: string;
    private code: string;
    private rule: Rule;
    private discount: Discount;

    constructor(description: string, code: string, rule: Rule, discount: Discount){
        this.description = description;
        this.code = code;
        this.rule = rule;
        this.discount = discount;
    }

    getCode(): string{
        return this.code;
    }

    getDescription(): string{
        return this.description;
    }

    isApply(product: PurchasedProduct): boolean{
        return this.rule.isApply(product);
    }

    calculateCost(product: PurchasedProduct, cost: number): number{
        if(this.isApply(product)){
            return this.discount.apply(cost);
        }
        return cost;
    }
}