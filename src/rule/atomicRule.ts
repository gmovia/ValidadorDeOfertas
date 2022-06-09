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

    getObjectRuleCode(){
        return this.field.split(".")[0];
    }

    getCode(){
        return this.code;
    }
    
    isApply(purchaseProduct: PurchasedProduct){
        const valueToCompare = purchaseProduct.translate(this.getObjectRuleCode()).translate(this.field);
        return this.strategy.isApply(valueToCompare, this.value);
    }
}