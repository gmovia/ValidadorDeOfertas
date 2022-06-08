import { Rule } from "../rule/rule";
import { Distinct } from "../TypeStrategy/distinct";
import { Equals } from "../TypeStrategy/equals"
import { Higher } from "../TypeStrategy/higher";
import { In } from "../TypeStrategy/in";
import { Lower } from "../TypeStrategy/lower";

export class RulesFactory{

    createRule(rule: any): Rule{  
        if(rule.type == "EQUALS"){
            return new Rule(rule.code, new Equals(), rule.field, rule.value);
        }
        if(rule.type == "HIGHER"){
            return new Rule(rule.code, new Higher(), rule.field, rule.value);
        }
        if(rule.type == "LOWER"){
            return new Rule(rule.code, new Lower(), rule.field, rule.value);
        }
        if(rule.type == "DISTINCT"){
            return new Rule(rule.code, new Distinct(), rule.field, rule.value);
        }
        return new Rule(rule.code, new In(), rule.field, rule.value);
    }
}