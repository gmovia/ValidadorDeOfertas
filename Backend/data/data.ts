import { TypeProduct } from '../src/type/typeProduct'
import { TypeCart } from '../src/type/typeCart';
import { TypeOffer } from '../src/type/typeOffer'
import { AnyRule, CompositeRule, RuleLiteral } from '../src/type/typeRule';
import untypedOffersExtra from "./dataJSON/extraOffers.json";
import untypedProducts from "./dataJSON/products.json";
import untypedCart from "./dataJSON/shoppingCart.json";
import untypedRulesAndOffers from "./dataJSON/offersAndRules.json";
import { PreProccessJson } from './preProccessFunction';


const preProccessJson = new PreProccessJson()

const UntypedOffersWithMissingLink = {
	rules: [],
	offers: [
		{
			code: "ERR001",
			description: "This offer should error out (Missing reference)",
			discount: {
				type: "FIX",
				value: 1
			},
			rule: "NONEXISTANT_RULE"
		}
	]
};

const UntypedOffersWithLoop = {
	rules: [
		{
			code: "LOOP",
			type: "NOT",
			rules: "LOOP"
		}
	],
	offers: [
		{
			code: "ERR002",
			description: "This offer should error out (Loop)",
			discount: {
				type: "CART_PERCENTAGE",
				value: 2
			},
			rule: "LOOP"
		}
	]
};


export const rulesWithMissingLinks: RuleLiteral[] = UntypedOffersWithMissingLink.rules as RuleLiteral[];
export const offersWithMissingLinks: TypeOffer[] = UntypedOffersWithMissingLink.offers as TypeOffer[];



export const rulesWithLoop: RuleLiteral[] = UntypedOffersWithLoop.rules as RuleLiteral[];
export const offersWithLoop: TypeOffer[] = UntypedOffersWithLoop.offers as TypeOffer[];



preProccessJson.filterJson(rulesWithMissingLinks, offersWithMissingLinks, UntypedOffersWithMissingLink);
preProccessJson.filterJson(rulesWithLoop, offersWithLoop, UntypedOffersWithLoop); 


export const rulesExtra: RuleLiteral[] = untypedOffersExtra.rules as RuleLiteral[];
export const offersExtra: TypeOffer[] = untypedOffersExtra.offers as TypeOffer[];


preProccessJson.filterJson(rulesExtra, offersExtra, untypedOffersExtra);


export const products: TypeProduct[] = untypedProducts as TypeProduct[];
export const cart: TypeCart = untypedCart as TypeCart;
export const rules: RuleLiteral[] = untypedRulesAndOffers.rules as RuleLiteral[];
export const offers: TypeOffer[] = untypedRulesAndOffers.offers as TypeOffer[];


preProccessJson.filterJson(rules, offers, untypedRulesAndOffers);