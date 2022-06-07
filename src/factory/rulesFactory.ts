import { Rule } from "../rule/rule";
import { Distinct } from "../TypeStrategy/distinct";
import { Equals } from "../TypeStrategy/equals"
import { Higher } from "../TypeStrategy/higher";
import { In } from "../TypeStrategy/in";
import { Lower } from "../TypeStrategy/lower";

export class RulesFactory{

    createRule(rule: any): Rule{
        let array = rule.field.split(".");
        let type = array[0];
        
        array.shift()
        let field = array.join(".");

        if(rule.type == "EQUALS"){
            return new Rule(rule.code, new Equals(), type, field, rule.value);
        }
        if(rule.type == "HIGHER"){
            return new Rule(rule.code, new Higher(), type, field, rule.value);
        }
        if(rule.type == "LOWER"){
            return new Rule(rule.code, new Lower(), type, field, rule.value);
        }
        if(rule.type == "DISTINCT"){
            return new Rule(rule.code, new Distinct(), type, field, rule.value);
        }
        return new Rule(rule.code, new In(), type, field, rule.value);
    }
}