import { RuleAtomic } from "../rule/ruleAtomic";
import { Distinct } from "../TypeStrategy/distinct";
import { Equals } from "../TypeStrategy/equals"
import { Higher } from "../TypeStrategy/higher";
import { In } from "../TypeStrategy/in";
import { Lower } from "../TypeStrategy/lower";

export class RulesFactory{

    createRule(rule: any): RuleAtomic{  
        if(rule.type == "EQUALS"){
            return new RuleAtomic(rule.code, new Equals(), rule.field, rule.value);
        }
        if(rule.type == "HIGHER"){
            return new RuleAtomic(rule.code, new Higher(), rule.field, rule.value);
        }
        if(rule.type == "LOWER"){
            return new RuleAtomic(rule.code, new Lower(), rule.field, rule.value);
        }
        if(rule.type == "DISTINCT"){
            return new RuleAtomic(rule.code, new Distinct(), rule.field, rule.value);
        }
        return new RuleAtomic(rule.code, new In(), rule.field, rule.value);
    }
}