import { TypeStrategy } from "../TypeStrategy/typeStrategy";
import { ObjectRule } from "../objectRule/objectRule";
import { PurchasedProduct } from "../objectRule/purchasedProduct";
import { Rule } from "./rule";

export class AtomicRule extends Rule{

    private code: string;
    private strategy: TypeStrategy;
    private field: string;
    private value: Object;
    
    constructor(code: string, strategy: TypeStrategy, field:string, value:Object){
        super();
        this.code = code;
        this.strategy = strategy;
        this.field = field;
        this.value = value;
    }

    private getObjectRuleCode(){
        return this.field.split(".")[0];
    }

    getCode(): string{
        return this.code;
    }

    isEquals(anotherCode: string): boolean{
        return this.code == anotherCode;
    }
    
    isApply(purchaseProduct: PurchasedProduct): boolean{
        const valueToCompare = purchaseProduct.translate(this.getObjectRuleCode()).translate(this.field);
        return this.strategy.isApply(valueToCompare, this.value);
    }
}