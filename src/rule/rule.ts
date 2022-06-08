import { RuleAtomic } from "./ruleAtomic";
import { LogicalCondition } from "../logicalCondition/logicalCondition"
import { PurchasedProduct } from "../objectRule/purchasedProduct";
import { ObjectRule } from "../objectRule/objectRule";

export class Rule{

    private logicalCondition: LogicalCondition;
    private code: string;
    private rulesAtomic: Array<RuleAtomic>;

    constructor(logicalCondition: LogicalCondition, code: string, rulesAtomic: Array<RuleAtomic>){
        this.logicalCondition = logicalCondition;
        this.code = code;
        this.rulesAtomic = rulesAtomic;
    }

    isApply(cart: PurchasedProduct){
        for(let rule of this.rulesAtomic){
            const objectRule = cart.translate(rule.getObjectRuleCode());
            this.logicalCondition.add(rule.isApply(objectRule));
        }
        return this.logicalCondition.calculate();
    }
}