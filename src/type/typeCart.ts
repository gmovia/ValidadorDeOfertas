import {TypeProduct} from '../type/typeProduct'
import {TypePayment} from '../type/typePayment'
import {TypeCalendar} from '../type/typeCalendar'

export interface TypeCart {
	products: TypeProduct[];
	payment: TypePayment;
	purchase_date: TypeCalendar;
}
