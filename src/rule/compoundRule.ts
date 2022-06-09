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

    isApply(purchasedProduct: PurchasedProduct){
        for(let rule of this.rulesAtomic){
            this.logicalCondition.add(rule.isApply(purchasedProduct));
        }
        return this.logicalCondition.calculate();
    }
}