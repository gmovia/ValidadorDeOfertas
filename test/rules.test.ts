import { Rule } from "../src/rule/rule"
import { Equals } from "../src/TypeStrategy/equals"
import { ProductFactory } from "../src/factory/productFactory";

const products = require('../products.json');
const factory = new ProductFactory(products);

it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB001 satisface la regla", ()=>{
    const rule = new Rule("R1", new Equals(), "PRODUCT", "code", "AB001");
    const product = factory.createProduct("AB001");
    expect(rule.isApply(product)).toBe(true);
})


it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB002 no satisface la regla", ()=>{
    const rule = new Rule("R1", new Equals(), "PRODUCT", "code", "AB001");
    const product = factory.createProduct("AB002");
    expect(rule.isApply(product)).toBe(false);
})