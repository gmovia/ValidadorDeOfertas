import {Payment} from '../objectRule/payment'
import { TypePayment } from '../type/typePayment';

export class PaymentFactory{

    createPayment(payment: TypePayment): Payment{
        return new Payment(payment["method"],
                           payment["entity"]
                           );
    }
}