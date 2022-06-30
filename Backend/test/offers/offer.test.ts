import { Calendar } from "../../src/objectRule/calendar";
import { Product } from "../../src/objectRule/product";
import { Payment } from "../../src/objectRule/payment";
import { Store } from "../../src/store/store";
import { PurchasedProduct } from "../../src/objectRule/purchasedProduct";
import { rules, offers } from "../../data/data"
import { OfferFactory } from "../../src/factory/offerFactory";

const product = new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X033AXX", "Lacteo", 19.20, 21, "AB001");
const payment = new Payment("DEBIT", "GALICIA");
const calendar = new Calendar("2002", 2, 28, "Sunday", 4);


it("Producto lacteo comprado en el mes de febrero aplica descuento del 10%",()=>{
    const store = new Store(rules);
    const factory = new OfferFactory(store);
    // get offer from offers with code OF0003
    let offer = null
    for (let o of offers) {
        if (o.code == "OF0003") {
            offer = factory.createOffer(o);
        }
    }
    expect(offer.calculateCost(new PurchasedProduct(product, payment, calendar), product.calculatePrice())).toBe(product.calculatePrice()*0.9);
});