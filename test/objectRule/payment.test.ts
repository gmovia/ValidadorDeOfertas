import {Payment} from '../../src/objectRule/payment'

it('Dado un pago con metodo de credito y la entidad galicia, cuando consulto el metodo, obtengo credito', ()=>{
    const payment = new Payment("CREDIT", "GALICIA");
    expect(payment.getMethod()).toBe("CREDIT");
})