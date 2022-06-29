import { TypeDiscount } from "../type/typeDiscount";
import { Discount } from "./discount";

export class Fix extends Discount{

    private discount: number;
    private type: string;

    constructor(type: string, discount: number){
        super();
        this.type = type;
        this.discount = discount;
    }

    apply(value: number): number{
        return value - this.discount;
    }

    getDiscount(): TypeDiscount{
        return {type: this.type, value: this.discount};
    }
}