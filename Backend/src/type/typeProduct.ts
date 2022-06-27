export interface TypeProduct {
	name: string;
	brand: {
		code: string;
		name: string;
	};
	category: {
		code: string;
		name: string;
	};
	price: number;
	iva_percentage: number;
	code: string;
}