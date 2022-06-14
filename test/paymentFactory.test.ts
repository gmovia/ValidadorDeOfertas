import { PaymentFactory } from "../src/factory/paymentFactory";

const cartJSON = require("../data/dataJSON/shoppingCart.json");

it("Creacion del metodo de pago",()=>{
    const factory = new PaymentFactory();
    const payment = factory.createPayment(cartJSON["payment"]);
    const method = cartJSON["payment"]["method"];
    expect(payment.translate("PAYMENT.method")).toBe(method);
});