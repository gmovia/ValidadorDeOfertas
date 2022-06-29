import { TypePayment } from "../type/typePayment";
import { ObjectRule } from "./objectRule";

export class Payment extends ObjectRule{
    
    constructor(method: string, entity: string){
        super();
        this.dictionary.set("PAYMENT.method", method);
        this.dictionary.set("PAYMENT.entity", entity);
    }

    getMethod(): string {
        return this.dictionary.get("PAYMENT.method");
    }

    getEntity(): string {
        return this.dictionary.get("PAYMENT.entity");
    }
}