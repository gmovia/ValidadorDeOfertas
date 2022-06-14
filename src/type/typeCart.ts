import {TypeProduct} from '../type/typeProduct'

export interface TypeCart {
	products: TypeProduct[];
	payment: {
		method: string;
		entity: string;
	};
	purchase_date: {
		year: number;
		month: number;
		day_number: number;
		week_day:
			| "Monday"
			| "Tuesday"
			| "Wednesday"
			| "Thursday"
			| "Friday"
			| "Saturday"
			| "Sunday";
		week_number: number;
	};
}
