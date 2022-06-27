import {TypeProduct} from './typeProduct'
import {TypePayment} from './typePayment'
import {TypeCalendar} from './typeCalendar'

export interface TypeCart {
	products: TypeProduct[];
	payment: TypePayment;
	purchase_date: TypeCalendar;
}
