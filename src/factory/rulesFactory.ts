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

    createRuleAtomic(ruleAtomic: any): AtomicRule{  
        const type = this.getTypeAtomic(ruleAtomic.type);
        return new AtomicRule(ruleAtomic.code, type, ruleAtomic.field, ruleAtomic.value);
    }

    // Optimizar esto ! Tratar de agrupar ambos casos en una unica funcion

    // No contempla el caso de una regla compuesta de reglas compuestas (o mix de compuestas con atomicas)
    createRuleComposedOfAtomicRules(ruleCompound: any, rulesAtomic: Array<AtomicRule>): CompoundRule{
        const type = this.getTypeCompound(ruleCompound.type);
        const arrayRules = new Array<AtomicRule>();
        for(let ruleCode of ruleCompound.rules){
            for(let rule of rulesAtomic){
                if(rule.isEquals(ruleCode)){
                    arrayRules.push(rule);
                }
            }
        }
        return new CompoundRule(type, ruleCompound.code, arrayRules);
    }

    //createRuleComposed =>  contempla el caso de tener reglas compuestas dentro! TO-DO
}