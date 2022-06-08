import { TypeStrategy } from "../TypeStrategy/typeStrategy";
import { ObjectRule } from "../objectRule/objectRule";

export class RuleAtomic{

    private code: string;
    private strategy: TypeStrategy;
    private field: string;
    private value: Object;
    
    constructor(code: string, strategy: TypeStrategy, field:string, value:Object){
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
    
    isApply(object: ObjectRule){
        return this.strategy.isApply(object.translate(this.field), this.value);
    }
}