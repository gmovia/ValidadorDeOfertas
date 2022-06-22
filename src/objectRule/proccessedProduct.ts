import { PurchasedProduct } from "./purchasedProduct";
import { Offer } from "../offer/offer";
import { Offers } from "../offer/offers";

export class ProccessedProduct{

    private product: PurchasedProduct;
    private offers: Offers;

    constructor(product: PurchasedProduct, arrayOffers: Array<Offer>){
        this.product = product;
        this.offers = new Offers();
        this.init(arrayOffers);
    }

    init(arrayOffers: Array<Offer>): void {
        for(let offer of arrayOffers){
            this.offers.add(offer);
        }
    }

    getCode(): string{
        return this.product.getCode();
    }

    getOffersDescriptions(): Array<string> {
        const offersDescriptions = Array<string>();
        for(let offer of this.offers.getOffersAppliedToTheProduct(this.product)){
            offersDescriptions.push(offer.getDescription());
        }
        return offersDescriptions;
    }

    calculatePrice(): number{
        return this.offers.calculatePrice(this.product);
    }
    
}

