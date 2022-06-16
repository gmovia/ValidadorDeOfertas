import { Calendar } from "../../src/objectRule/calendar";
import { Product } from "../../src/objectRule/product";
import { Payment } from "../../src/objectRule/payment";
import { Store } from "../../src/store/store";
import { PurchasedProduct } from "../../src/objectRule/purchasedProduct";
import { rules } from "../../data/data"

const product = new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 19.20, 21, "AB001");
const payment = new Payment("DEBIT", "GALICIA");
const calendar = new Calendar("2002", 2, 28, "Sunday", 4);


it("Dado que agrego una regla atomica con codigo MES_FEBRERO, cuando consulto el codigo MES_FEBRERO, obtengo una regla atomica",()=>{
    const store = new Store(rules);
    const rule = store.getRule("MES_FEBRERO");
    expect(rule.getCode()).toBe("MES_FEBRERO");

    expect(rule.isApply(new PurchasedProduct(product, payment, calendar))).toBe(true);
    var otherCalendar = new Calendar("2002", 1, 28, "Sunday", 4);
    expect(rule.isApply(new PurchasedProduct(product, payment, otherCalendar))).toBe(false);

});


it("Dado que agrego una regla compuesta con codigo PAGO_TARJETA_MACRO, cuando consulto el codigo PAGO_TARJETA_MACRO, obtengo una regla compuesta",()=>{
    const store = new Store(rules);
    const rule = store.getRule("PAGO_TARJETA_MACRO");
    expect(rule.getCode()).toBe("PAGO_TARJETA_MACRO");

    var payment = new Payment("DEBIT", "GALICIA");
    expect(rule.isApply(new PurchasedProduct(product, payment, calendar))).toBe(true);

    var payment = new Payment("CREDIT", "GALICIA");
    expect(rule.isApply(new PurchasedProduct(product, payment, calendar))).toBe(true);
});


it("Dado que agrego una regla compuesta con codigo NO_MACRO, cuando consulto el codigo NO_MACRO, obtengo una regla compuesta",()=>{
    const store = new Store(rules);
    const rule = store.getRule("NO_MACRO");
    expect(rule.getCode()).toBe("NO_MACRO");

    var payment = new Payment("DEBIT", "MACRO");
    expect(rule.isApply(new PurchasedProduct(product, payment, calendar))).toBe(false);

    var payment = new Payment("CREDIT", "GALICIA");
    expect(rule.isApply(new PurchasedProduct(product, payment, calendar))).toBe(true);
});
