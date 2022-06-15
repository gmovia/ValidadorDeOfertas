import { PurchasedProduct } from '../objectRule/purchasedProduct';

export abstract class Rule{
    abstract isApply(purchasedProduct: PurchasedProduct): boolean;
    abstract getCode(): string;
}