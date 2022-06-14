import {TypeProduct} from './typeProduct'
import {TypeDiscount} from './typeDiscount'

export interface TypeProcessedProduct {
	product: TypeProduct;
	discounts: TypeDiscount[];
}
