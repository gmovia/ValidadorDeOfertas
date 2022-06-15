import { OfferFactory } from "../../src/factory/offerFactory";
import { offers } from "../../data/data";
import { rules } from "../../data/data";
import { Store } from "../../src/store/store";
import { Product } from "../../src/objectRule/product";
import { Payment } from "../../src/objectRule/payment";
import { Calendar } from "../../src/objectRule/calendar";
import { PurchasedProduct } from "../../src/objectRule/purchasedProduct";

const store = new Store(rules);

const product = new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X033AXX", "Lacteo", 19.20, 21, "AB001");
const payment = new Payment("DEBIT", "GALICIA");
const calendar = new Calendar("2002", 2, 28, "Sunday", 4);

it("Creacion de la oferta 0F0001",()=>{
    const factory = new OfferFactory(store);
    const offer = factory.createOffer(offers[0]);
    const code = offers[0].code;
    expect(offer.getCode()).toBe(code);

    var purchasedProduct = new PurchasedProduct(product, payment, calendar);
    expect(offer.isApply(purchasedProduct)).toBe(true);

    var otherCalendar = new Calendar("2002", 1, 28, "Sunday", 4);
    purchasedProduct = new PurchasedProduct(product, payment, otherCalendar);
    expect(offer.isApply(purchasedProduct)).toBe(false);

    var otherProduct = new Product("Salame", "ABCD", "Paladini", "XXX", "Fiambre", 100, 22, "AFG34");
    purchasedProduct = new PurchasedProduct(otherProduct, payment, otherCalendar);
    expect(offer.isApply(purchasedProduct)).toBe(false);
});