import { Discount } from "../discount/discount";

export class Percentage extends Discount{

    private percentage: number;

    constructor(percentage: number){
        super();
        this.percentage = percentage;
    }

    apply(value: number): number{
        return (1-this.percentage/100)*value;
    }
}