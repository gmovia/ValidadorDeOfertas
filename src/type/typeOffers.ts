import {RuleLiteral} from './typeRule'
import {TypeOffer} from './typeOffer'

export interface Offers {
	rules: RuleLiteral[];
	offers: TypeOffer[];
}