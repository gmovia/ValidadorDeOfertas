import { AND } from "../logicalCondition/AND";
import { LogicalCondition } from "../logicalCondition/logicalCondition";
import { NOT } from "../logicalCondition/NOT";
import { OR } from "../logicalCondition/OR";
import { AtomicRule } from "../rule/atomicRule";
import { CompoundRule } from "../rule/compoundRule";
import { Rule } from "../rule/rule";
import { Distinct } from "../TypeStrategy/distinct";
import { Equals } from "../TypeStrategy/equals"
import { Higher } from "../TypeStrategy/higher";
import { In } from "../TypeStrategy/in";
import { Lower } from "../TypeStrategy/lower";
import { TypeStrategy } from "../TypeStrategy/typeStrategy";

export class RulesFactory{

    private getTypeAtomic(type: string): TypeStrategy{
        if(type == "EQUALS"){return new Equals();}
        if(type == "HIGHER"){return new Higher();}
        if(type == "LOWER"){return new Lower();}
        if(type == "DISTINCT"){return new Distinct();}
        return new In();
    }

    private getTypeCompound(type: string): LogicalCondition{
        if(type == "AND"){return new AND();}
        if(type == "OR"){return new OR();}
        return new NOT();
    }

    createRuleAtomic(code: string, type: string, field: string, value: any): AtomicRule{  
        const typeObject = this.getTypeAtomic(type);
        return new AtomicRule(code, typeObject, field, value);
    }

    createRuleCompound(code: string, type: string, rules: Array<Rule>): CompoundRule{
        const typeObject = this.getTypeCompound(type);
        return new CompoundRule(typeObject, code, rules);
    }
}