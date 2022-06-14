import {AnyRule} from './typeRule'
import {TypeDiscount} from './typeDiscount'

export interface TypeOffer {
	description: string;
	code: string;
	rule: AnyRule;
	discount: TypeDiscount;
}