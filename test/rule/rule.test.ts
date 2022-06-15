import { AtomicRule } from "../../src/rule/atomicRule"
import { CompoundRule } from "../../src/rule/compoundRule"
import { AND } from "../../src/logicalCondition/AND"
import { OR } from "../../src/logicalCondition/OR"
import { NOT } from "../../src/logicalCondition/NOT"
import { Equals } from "../../src/TypeStrategy/equals"
import { Product } from "../../src/objectRule/product"
import { Calendar } from "../../src/objectRule/calendar"
import { Payment } from "../../src/objectRule/payment"
import { PurchasedProduct } from "../../src/objectRule/purchasedProduct"


it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de debito con la entidad banco macro satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const rule = new CompoundRule(new AND(), "PAGO_TARJETA_MACRO", [ruleAtomicMacro, ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "D1", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de credito con la entidad banco macro no satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "CREDIT")
    const rule = new CompoundRule(new AND(), "PAGO_TARJETA_MACRO", [ruleAtomicMacro, ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "D1", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla compuesta de tipo OR sobre las reglas atomicas PRODUCTO_LACTEO y PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de debito satisface la regla", ()=>{
    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT");
    const rule = new CompoundRule(new OR(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "D1", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla compuesta de tipo OR sobre las reglas atomicas PRODUCTO_LACTEO y PAGO_TARJETA_DEBITO, un producto lacteo comprado satisface la regla", ()=>{
    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT");
    const rule = new CompoundRule(new OR(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("CREDIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla compuesta de tipo NOT sobre la regla atomica PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de credito satisface la regla", ()=>{
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT");
    const rule = new CompoundRule(new NOT(), "NOT_TARJETA_DEBITO", [ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("CREDIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})


it("Dada una regla compuesta de tipo NOT sobre la regla atomica PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de debito no satisface la regla", ()=>{
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT");
    const rule = new CompoundRule(new NOT(), "NOT_TARJETA_DEBITO", [ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y LACTEO_TARJETA_DEBITO, un producto lacteo comprado con tarjeta de debito con la entidad banco macro satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");

    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const ruleLacteoTarjetaDebito = new CompoundRule(new AND(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const rule = new CompoundRule(new AND(), "PAGO_MACRO_TARJETA_DEBITO_PRODUCTO_LACTEO", [ruleAtomicMacro, ruleLacteoTarjetaDebito]);

    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})

it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y LACTEO_TARJETA_DEBITO, un producto lacteo comprado con tarjeta de credito con la entidad banco macro no satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");

    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const ruleLacteoTarjetaDebito = new CompoundRule(new AND(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const rule = new CompoundRule(new AND(), "PAGO_MACRO_TARJETA_DEBITO_PRODUCTO_LACTEO", [ruleAtomicMacro, ruleLacteoTarjetaDebito]);

    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("CREDIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})

it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y LACTEO_TARJETA_DEBITO, un producto lacteo comprado con tarjeta de debito con la entidad banco galicia no satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");

    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const ruleLacteoTarjetaDebito = new CompoundRule(new AND(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const rule = new CompoundRule(new AND(), "PAGO_MACRO_TARJETA_DEBITO_PRODUCTO_LACTEO", [ruleAtomicMacro, ruleLacteoTarjetaDebito]);

    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "GALICIA");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})


it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y LACTEO_TARJETA_DEBITO, un producto que no es lacteo comprado con tarjeta de debito con la entidad banco macro no satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");

    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const ruleLacteoTarjetaDebito = new CompoundRule(new AND(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const rule = new CompoundRule(new AND(), "PAGO_MACRO_TARJETA_DEBITO_PRODUCTO_LACTEO", [ruleAtomicMacro, ruleLacteoTarjetaDebito]);

    const product = new Product("A1", "B1", "C1", "X034XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(false);
})


it("Dada una regla compuesta de tipo OR sobre las reglas atomicas PAGO_MACRO y LACTEO_TARJETA_DEBITO, un producto lacteo comprado con tarjeta de credito con la entidad banco macro satisface la regla", ()=>{
    const ruleAtomicMacro = new AtomicRule("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");

    const ruleAtomicLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const ruleAtomicTarjetaDebito = new AtomicRule("PAGO_TARJETA_DEBITO", new Equals(), "PAYMENT.method", "DEBIT")
    const ruleLacteoTarjetaDebito = new CompoundRule(new AND(), "LACTEO_TARJETA_DEBITO", [ruleAtomicLacteo, ruleAtomicTarjetaDebito]);
    
    const rule = new CompoundRule(new OR(), "PAGO_MACRO_TARJETA_DEBITO_PRODUCTO_LACTEO", [ruleAtomicMacro, ruleLacteoTarjetaDebito]);

    const product = new Product("A1", "B1", "C1", "X033XXX", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("CREDIT", "MACRO");

    const purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(purchasedProduct)).toBe(true);
})
