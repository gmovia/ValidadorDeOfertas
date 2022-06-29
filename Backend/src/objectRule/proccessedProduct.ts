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
       return this.offers.getDescriptions();
    }

    calculatePrice(): number{
        return this.offers.calculatePrice(this.product);
    }

    getResult(){
        return {discounts: this.offers.getDiscounts(), product: this.product.getProduct()};
    }
    
}

