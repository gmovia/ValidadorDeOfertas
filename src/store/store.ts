import { RulesFactory } from '../factory/rulesFactory';
import { AtomicRule } from '../rule/atomicRule';
import { CompoundRule } from '../rule/compoundRule';
import {Rule} from '../rule/rule'
import { CompositeRule, RuleLiteral, SimpleRule } from '../type/typeRule';

export class Store{

    private dictionaryAtomicRule: Map<string, AtomicRule>;
    private dictionaryCompoundRule: Map<string, any>;
    private factory: RulesFactory;

    constructor(rules: RuleLiteral[]){
        this.dictionaryAtomicRule = new Map<string, AtomicRule>();
        this.dictionaryCompoundRule = new Map<string, any>();
        this.factory = new RulesFactory();
        this.init(rules);
    }

    private init(rules: RuleLiteral[]): void{
        for(let rule of rules){
            this.store(rule);
        }
    }
    
    private store(rule: RuleLiteral): void{
        if(this.isAtomic(rule.type)){
            rule = rule as SimpleRule
            const ruleAtomic = this.factory.createRuleAtomic(rule.code, rule.type, rule.field, rule.value);
            this.dictionaryAtomicRule.set(rule.code, ruleAtomic);
        }
        rule = rule as CompositeRule
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