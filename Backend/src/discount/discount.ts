import { TypeDiscount } from "../type/typeDiscount";

export abstract class Discount{
    abstract apply(value: number): number
    abstract getDiscount(): TypeDiscount
}