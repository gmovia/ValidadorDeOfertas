import { RulesFactory } from '../src/factory/rulesFactory'
import { Product } from '../src/objectRule/product';

const rulesFactory = new RulesFactory();


it("Dado que creo la regla de ELECTRO_LIQ cuando la aplico sobre un producto con codigo X033XXX satisface la condicion", ()=>{
    const ruleJSON = JSON.parse('{"code" : "ELECTRO_LIQ", "type" : "IN", "field" : "PRODUCT.code", "value" : ["X033XXX", "X034XXX", "X037XXX"]}');
    const rule = rulesFactory.createRule(ruleJSON);

    const productJSON = JSON.parse('{"code": "X033XXX"}');
    const product = new Product(productJSON);

    expect(rule.isApply(product)).toBe(true); //Falla. Me toma el arreglo como un string. Me lo tendria que tomar como si fuera una lista (asi puede hacer el in).
})