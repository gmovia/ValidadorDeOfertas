import {Payment} from '../objectRule/payment'

export class PaymentFactory{

    createPayment(payment: any): Payment{
        return new Payment(payment["method"],
                           payment["entity"]
                           );
    }
}