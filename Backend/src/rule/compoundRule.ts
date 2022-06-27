import { AtomicRule } from "./atomicRule";
import { LogicalCondition } from "../logicalCondition/logicalCondition"
import { PurchasedProduct } from "../objectRule/purchasedProduct";
import { Rule } from "./rule";


export class CompoundRule extends Rule{

    private logicalCondition: LogicalCondition;
    private code: string;
    private rulesAtomic: Array<Rule>;

    constructor(logicalCondition: LogicalCondition, code: string, rulesAtomic: Array<Rule>){
        super();
        this.logicalCondition = logicalCondition;
        this.code = code;
        this.rulesAtomic = rulesAtomic;
    }

    getCode(): string{
        return this.code;
    }

    isApply(purchasedProduct: PurchasedProduct): boolean{
        var arrayBoolean = new Array<Boolean>();
        for(let rule of this.rulesAtomic){
            arrayBoolean.push(rule.isApply(purchasedProduct));
        }
        return this.logicalCondition.calculate(arrayBoolean);
    }
}