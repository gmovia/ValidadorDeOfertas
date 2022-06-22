import { Discount } from "./discount";

export class Fix extends Discount{

    private discount: number;

    constructor(discount: number){
        super();
        this.discount = discount;
    }

    apply(value: number): number{
        return value - this.discount;
    }
}