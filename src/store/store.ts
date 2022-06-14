import { RulesFactory } from '../factory/rulesFactory';
import { AtomicRule } from '../rule/atomicRule';
import {Rule} from '../rule/rule'

export class Store{

    private dictionaryAtomicRule: Map<string, AtomicRule>;
    private dictionaryCompoundRule: Map<string, any>;
    private factory: RulesFactory;

    constructor(rulesJSON: any){
        this.dictionaryAtomicRule = new Map<string, AtomicRule>();
        this.dictionaryCompoundRule = new Map<string, Map<string, any>>();
        this.factory = new RulesFactory();
        this.init(rulesJSON);
    }

    private init(rules: any): void{
        for(let rule of rules){
            this.store(rule);
        }
    }
    
    private store(rule: any): void{
        if(this.isAtomic(rule.type)){
            const ruleAtomic = this.factory.createRuleAtomic(rule.code, rule.type, rule.field, rule.value);
            this.dictionaryAtomicRule.set(rule.code, ruleAtomic);
        }
        this.dictionaryCompoundRule.set(rule.code, rule);
    }

    private isAtomic(type: string): Boolean{
        return ["EQUALS", "DISTINCT", "HIGHER", "LOWER", "IN"].includes(type);
    }

    private searchRules(codes: any): Array<Rule>{
       const arrayRules = new Array<Rule>();
       if(typeof(codes) == "string"){ //CASO NOT
           arrayRules.push(this.getRule(codes));
           return arrayRules;
       }
       for(let code of codes){
           arrayRules.push(this.getRule(code));
       }
       return arrayRules;
    }

    getRule(code: string): Rule{
        if(this.dictionaryAtomicRule.has(code)){
            return this.dictionaryAtomicRule.get(code)!;
        }
        const rule = this.dictionaryCompoundRule.get(code);
        const arrayRules = this.searchRules(rule.rules);
        return this.factory.createRuleCompound(rule.code, rule.type, arrayRules);
    }
}