import { Product } from "../objectRule/product";
import { PurchasedProduct } from "../objectRule/purchasedProduct";
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

    calculatePrice(): number{
        return this.offers.calculatePrice(this.product);
    }
    
}

