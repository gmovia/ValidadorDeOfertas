import {Offer} from './offer'
import { PurchasedProduct } from '../objectRule/purchasedProduct';

export class Offers{

    private offers: Array<Offer>;

    constructor(){
        this.offers = new Array<Offer>();
    }

    add(offer: Offer): void{
        this.offers.push(offer);
    }

    getOffersAppliedToTheProduct(product: PurchasedProduct){
        const offersApplied = new Array<Offer>();
        for(let offer of this.offers){
            if(offer.isApply(product)){
                offersApplied.push(offer);
            }
        }
        return offersApplied;
    }

    calculatePrice(product: PurchasedProduct): number{
        let cost = product.calculatePrice();
        for(let offer of this.getOffersAppliedToTheProduct(product)){
            cost = offer.calculateCost(product, cost);
        }
        return cost;
    }
}