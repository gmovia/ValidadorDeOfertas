import { Offer } from "../offer/offer";
import { Store } from "../store/store";
import { TypeOffer } from "../type/typeOffer";
import { DiscountFactory } from "./discountFactory";

export class OfferFactory{

    private discountFactory: DiscountFactory;
    private store: Store;

    constructor(store: Store){
        this.discountFactory = new DiscountFactory();
        this.store = store;
    }

    createOffer(offer: TypeOffer): Offer{
        const discount = this.discountFactory.createDiscount(offer.discount);
        const rule = this.store.getRule(offer.rule.code);
        return new Offer(offer.description, offer.code, rule, discount);
    }
}