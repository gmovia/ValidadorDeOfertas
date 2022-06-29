import { Percentage } from "../../src/discount/percentage";
import { Fix } from "../../src/discount/fix"

it("Descuento del 20% se aplica sobre un valor de 10 y se obtiene 8", ()=>{
    const discount = new Percentage("PRODUCT_PERCENTAGE",20);
    expect(discount.apply(10)).toBe(8);
})

it("Descuento de valor fijo 10 se aplica sobre 100 y se obtiene 90", ()=>{
    const discount = new Fix("FIX", 10);
    expect(discount.apply(100)).toBe(90);
})