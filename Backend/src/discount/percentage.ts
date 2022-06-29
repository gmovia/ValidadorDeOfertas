import { TypeDiscount } from "../type/typeDiscount";
import { Discount } from "./discount";

export class Percentage extends Discount{

    private percentage: number;
    private type: string;

    constructor(type: string, percentage: number){
        super();
        this.type = type;
        this.percentage = percentage;
    }

    apply(value: number): number{
        return (1-this.percentage/100)*value;
    }

    getDiscount(): TypeDiscount{
        return {type: this.type, value: this.percentage};
    }
}