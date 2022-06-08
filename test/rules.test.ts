import { Product } from "../src/objectRule/product";
import { Rule } from "../src/rule/rule"
import { Equals } from "../src/TypeStrategy/equals"
import { Distinct } from "../src/TypeStrategy/distinct"
import { Higher } from "../src/TypeStrategy/higher"
import { Lower } from "../src/TypeStrategy/lower"
import { In } from "../src/TypeStrategy/in"

let code = "AB001";
let name = "Leche Descremada 1L serenisima";
let brandCode = "DEFG123";
let brandName = "La Serenisima";
let categoryCode = "X04ABXX";
let categoryName = "Lacteo";
let price = 19.20;
let iva_porcentage = 21.0;


it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB001 satisface la regla", ()=>{
    const rule = new Rule("R1", new Equals(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB001")
    expect(rule.isApply(product)).toBe(true);
})


it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB002 no satisface la regla", ()=>{
    const rule = new Rule("R1", new Equals(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB002");
    expect(rule.isApply(product)).toBe(false);
})

it("Dada una regla de tipo distinct sobre el codigo de producto AB001, un producto con codigo AB002 satisface la regla", ()=>{
    const rule = new Rule("R1", new Distinct(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB002");
    expect(rule.isApply(product)).toBe(true);
})

it("Dada una regla de tipo distinct sobre el codigo de producto AB001, un producto con codigo AB001 no satisface la regla", ()=>{
    const rule = new Rule("R1", new Distinct(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB001");
    expect(rule.isApply(product)).toBe(false);
})

it("Dada una regla de tipo higher aplicada sobre precios de valor 1000, un producto con precio 1100 satisface la regla", ()=>{
    const rule = new Rule("R1", new Higher(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 1100, iva_porcentage, code);
    expect(rule.isApply(product)).toBe(true);
})

it("Dada una regla de tipo higher aplicada sobre precios de valor 1000, un producto con precio 900 no satisface la regla", ()=>{
    const rule = new Rule("R1", new Higher(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 900, iva_porcentage, code);
    expect(rule.isApply(product)).toBe(false);
})

it("Dada una regla de tipo lower aplicada sobre precios de valor 1000, un producto con precio 900 satisface la regla", ()=>{
    const rule = new Rule("R1", new Lower(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 900, iva_porcentage, code);
    expect(rule.isApply(product)).toBe(true);
})

it("Dada una regla de tipo in aplicada sobre los codigos [AB, BC], un producto con codigo AB satisface la regla", ()=>{
    const rule = new Rule("R1", new In(), "PRODUCT.code", ["AB", "BC"]);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB");
    expect(rule.isApply(product)).toBe(true);
})

it("Dada una regla de tipo in aplicada sobre los codigos [AB, BC], un producto con codigo ABD no satisface la regla", ()=>{
    const rule = new Rule("R1", new In(), "PRODUCT.code", ["AB", "BC"]);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "ABD");
    expect(rule.isApply(product)).toBe(false);
})

