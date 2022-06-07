import { TypeStrategy } from "../TypeStrategy/typeStrategy";
import { ObjectRule } from "../objectRule/objectRule";

export class Rule{

    private code: string;
    private strategy: TypeStrategy;
    private type: string;
    private field: string;
    private value: Object;
    
    constructor(code: string, strategy: TypeStrategy, type:string, field:string, value:Object){
        this.code = code;
        this.strategy = strategy;
        this.type = type;
        this.field = field;
        this.value = value;
    }

    getCode(){
        return this.code;
    }

    isApply(object: ObjectRule){
        if(object.isType(this.type)){
            return this.strategy.isApply(object.translate(this.field), this.value);
        }
        throw new Error("Error de tipo");
    }
}