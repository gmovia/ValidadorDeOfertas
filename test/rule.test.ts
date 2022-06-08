import { RuleAtomic } from "../src/rule/ruleAtomic"
import { Rule } from "../src/rule/rule"
import { AND } from "../src/logicalCondition/AND"
import { Equals } from "../src/TypeStrategy/equals"
import { Product } from "../src/objectRule/product"
import { Calendar } from "../src/objectRule/calendar"
import { Payment } from "../src/objectRule/payment"
import { PurchasedProduct } from "../src/objectRule/purchasedProduct"


it("Dada una regla compuesta de tipo AND sobre las reglas atomicas PAGO_MACRO y PAGO_TARJETA_DEBITO, un producto comprado con tarjeta de debito con la entidad banco macro satisface la regla", ()=>{
    const ruleAtomicMacro = new RuleAtomic("PAGO_MACRO", new Equals(), "PAYMENT.entity", "MACRO");
    const ruleAtomicTarjetaDebito = new RuleAtomic("PAGO_MACRO", new Equals(), "PAYMENT.method", "DEBIT")
    const rule = new Rule(new AND(), "PAGO_TARJETA_MACRO", [ruleAtomicMacro, ruleAtomicTarjetaDebito]);
    
    const product = new Product("A1", "B1", "C1", "D1", "E1", 10, 21, "ABC1");
    const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);
    const payment = new Payment("DEBIT", "MACRO");

    const cart = new PurchasedProduct(product, payment, calendar);
    expect(rule.isApply(cart)).toBe(true);
})