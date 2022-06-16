import { OfferFactory } from "./factory/offerFactory";
import { ShoppingCartFactory } from "./factory/shoppingCartFactory";
import { PurchasedProduct } from "./objectRule/purchasedProduct";
import { Offer } from "./offer/offer";
import { Store } from "./store/store";
import { TypeCart } from "./type/typeCart";
import { TypeOffer } from "./type/typeOffer";
import { RuleLiteral } from "./type/typeRule";

// TODO: Replace this with the actual type
type State = Offer[];

export function initializeOffers(offers: TypeOffer[], rules: RuleLiteral[]): State {
	const factory = new OfferFactory(new Store(rules));
	const state = new Array<Offer>();
	for(let offer of offers){
		state.push(factory.createOffer(offer));
	}
	return state;	
	// Inicializa las ofertas
}

export function processProducts(state: State, cart: TypeCart): Array<PurchasedProduct> {
	const factory = new ShoppingCartFactory();
	const shoppingCart = factory.createShoppingCart(cart);
	for(let offer of state){
		shoppingCart.applyOffer(offer);
	}
	return shoppingCart.discountedProductList();
	// Devuelve una lista de productos que aplican al menos una oferta
}

