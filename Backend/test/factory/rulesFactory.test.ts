import { RulesFactory } from "../../src/factory/rulesFactory";


it("Creacion de regla atomica de tipo equals",()=>{
    const factory = new RulesFactory();
    const ruleAtomic = factory.createRuleAtomic("Atomic01", "EQUALS", "PRODUCT.code", 100);
    expect(ruleAtomic.getCode()).toBe("Atomic01");
});

it("Creacion de regla compuesta de tipo AND",()=>{
    const factory = new RulesFactory();
    const ruleAtomic1 = factory.createRuleAtomic("Atomic01", "EQUALS", "PRODUCT.price", 100);
    const ruleAtomic2 = factory.createRuleAtomic("Atomic02", "IN", "PRODUCT.category.code", ["ABD", "ACD"]);

    const ruleCompound = factory.createRuleCompound("Compound01", "AND", [ruleAtomic1, ruleAtomic2]);
    expect(ruleCompound.getCode()).toBe("Compound01");
});


