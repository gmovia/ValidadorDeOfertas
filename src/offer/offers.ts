import {Offer} from '../offer/offer'
import { PurchasedProduct } from '../objectRule/purchasedProduct';

export class Offers{

    private offers: Array<Offer>;

    constructor(){
        this.offers = new Array<Offer>();
    }

    add(offer: Offer): void{
        this.offers.push(offer);
    }

    isAnyOfferApply(product: PurchasedProduct): boolean {
        for(let offer of this.offers){
            if(offer.isApply(product)){
                return true;
            }
        }
        return false;
    }

    calculatePrice(product: PurchasedProduct): number{
        let cost = product.calculatePrice();
        for(let offer of this.offers){
            cost = offer.calculateCost(product, cost);
        }
        return cost;
    }
}