import { PaymentFactory } from "../../src/factory/paymentFactory";
import { cart } from "../../data/data"

it("Creacion del metodo de pago",()=>{
    const factory = new PaymentFactory();
    const payment = factory.createPayment(cart["payment"]);
    const method = cart["payment"]["method"];
    expect(payment.translate("PAYMENT.method")).toBe(method);
});