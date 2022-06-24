import { OfferFactory } from "./factory/offerFactory";
import { ShoppingCartFactory } from "./factory/shoppingCartFactory";
import { Offer } from "./offer/offer";
import { Store } from "./store/store";
import { ProccessedProduct } from "./objectRule/proccessedProduct";
import { TypeCart } from "./type/typeCart";
import { TypeOffer } from "./type/typeOffer";
import { RuleLiteral } from "./type/typeRule";

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

export function processProducts(state: State, cart: TypeCart): Array<ProccessedProduct> {
	
	const factory = new ShoppingCartFactory();
	const shoppingCart = factory.createShoppingCart(cart);
	for(let offer of state){
		shoppingCart.applyOffer(offer);
	}
	return shoppingCart.discountedProductList();
	// Devolver una lista con los productos actualizados
}

