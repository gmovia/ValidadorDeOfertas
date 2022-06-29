import {AnyRule, RuleLiteral} from './typeRule'
import {TypeDiscount} from './typeDiscount'

export interface TypeOffer {
	description: string;
	code: string;
	rule: RuleLiteral | string;
	discount: TypeDiscount;
}