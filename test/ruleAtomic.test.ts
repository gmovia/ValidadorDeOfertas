import { Product } from "../src/objectRule/product";
import { AtomicRule } from "../src/rule/atomicRule"
import { Equals } from "../src/TypeStrategy/equals"
import { Distinct } from "../src/TypeStrategy/distinct"
import { Higher } from "../src/TypeStrategy/higher"
import { Lower } from "../src/TypeStrategy/lower"
import { In } from "../src/TypeStrategy/in"
import { Calendar } from "../src/objectRule/calendar";
import { Payment } from "../src/objectRule/payment";
import { PurchasedProduct } from "../src/objectRule/purchasedProduct";

let code = "AB001";
let name = "Leche Descremada 1L serenisima";
let brandCode = "DEFG123";
let brandName = "La Serenisima";
let categoryCode = "X04ABXX";
let categoryName = "Lacteo";
let price = 19.20;
let iva_porcentage = 21.0;

const product = new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 19.20, 21, "AB001");
const payment = new Payment("DEBIT", "GALICIA");
const calendar = new Calendar("2002", "ENERO", 28, "Sunday", 4);

it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB001 satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Equals(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB001")
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})


it("Dada una regla de tipo equals sobre el codigo de producto AB001, un producto con codigo AB002 no satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Equals(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB002");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla de tipo distinct sobre el codigo de producto AB001, un producto con codigo AB002 satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Distinct(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB002");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo distinct sobre el codigo de producto AB001, un producto con codigo AB001 no satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Distinct(), "PRODUCT.code", "AB001");
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB001");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla de tipo higher aplicada sobre precios de valor 1000, un producto con precio 1100 satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Higher(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 1100, iva_porcentage, code);
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo higher aplicada sobre precios de valor 1000, un producto con precio 900 no satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Higher(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 900, iva_porcentage, code);
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla de tipo lower aplicada sobre precios de valor 1000, un producto con precio 900 satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new Lower(), "PRODUCT.price", 1000);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, 900, iva_porcentage, code);
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo in aplicada sobre los codigos [AB, BC], un producto con codigo AB satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new In(), "PRODUCT.code", ["AB", "BC"]);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "AB");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo in aplicada sobre los codigos [AB, BC], un producto con codigo ABD no satisface la regla", ()=>{
    const rule = new AtomicRule("R1", new In(), "PRODUCT.code", ["AB", "BC"]);
    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, "ABD");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla de tipo equals sobre el mes de febrero, si es 23 de febrero entonces se aplica la regla", ()=>{
    const rule = new AtomicRule("MES_FEBRERO", new Equals(), "CALENDAR.month", "FEBRERO");
    const calendar = new Calendar("2002", "FEBRERO", 23, "Thursday", 4);
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo equals sobre el mes de febrero, si es 28 de enero entonces no se aplica la regla", ()=>{
    const rule = new AtomicRule("MES_FEBRERO", new Equals(), "CALENDAR.month", "FEBRERO");
    const calendar = new Calendar("2002", "ENERO", 28, "Sunday", 4);
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla de tipo equals sobre pagos con entidad macro, si el pago se realiza con tarjeta de banco macro, entonces se aplica la regla",()=>{
    const rule = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");
    const payment = new Payment("CREDIT", "MACRO");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla de tipo equals sobre pagos con entidad macro, si el pago se realiza con tarjeta de banco galicia, entonces no se aplica la regla",()=>{
    const rule = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");
    const payment = new Payment("CREDIT", "GALICIA");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla sobre pago con tarjeta de debito o credito, cuando realizo un pago con tarjeta de credito, se aplica la regla", ()=>{
    const rule = new AtomicRule("PAGO_TARJETA_DEBITO_CREDITO", new In(), "PAYMENT.method", ["CREDIT", "DEBIT"]);
    const payment = new Payment("CREDIT", "GALICIA");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla sobre pago con tarjeta de debito o credito, cuando realizo un pago con efectivo, no se aplica la regla", ()=>{
    const rule = new AtomicRule("PAGO_TARJETA_DEBITO_CREDITO", new In(), "PAYMENT.method", ["CREDIT", "DEBIT"]);
    const payment = new Payment("CASH", "GALICIA");
    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

