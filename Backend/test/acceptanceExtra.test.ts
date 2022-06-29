import {  products} from "../data/data";
import { initializeOffers, processProducts } from "../src/test-driver";
import { TypeCart } from "../src/type/typeCart";
import { TypeDiscount } from "../src/type/typeDiscount";
import {offersExtra, rulesExtra} from "../data/dataExtra";


describe("acceptance tests 2", () => {
	const state = initializeOffers(offersExtra, rulesExtra);

	it("should get 30% off with foreign currencies", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CASH",
				entity: "USD"
			},
			purchase_date: {
				year: 1996,
				month: 7,
				day_number: 21,
				week_day: "Thursday",
				week_number: 29
			}
		};
		const result = processProducts(state, cart);



		const expectedDiscount: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 30
			}
		];
		/*expect(normalizeResult(result)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount,
					product: product
				}))
			)
		);*/
		

		for (let i = 0; i < result.length; i++) {
			expect(result[i].getResult()).toEqual({discounts: expectedDiscount, product: products[i]});
		}
	});

	it("should get 1% off on monday for things more expensive than 175", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CHEQUE",
				entity: "SANTANDER"
			},
			purchase_date: {
				year: 1959,
				month: 1,
				day_number: 5,
				week_day: "Monday",
				week_number: 2
			}
		};
		const result = processProducts(state, cart);

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "PRODUCT_PERCENTAGE",
				value: 1
			}
		];
		expect([result[0].getResult()]).toEqual([
			{
				discounts: expectedDiscount,
				product: products[1]
			}
		]);

	});

	it("should get 10% off on 10.5% iva on friday", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CREDIT",
				entity: "MACRO"
			},
			purchase_date: {
				year: 2022,
				month: 6,
				day_number: 3,
				week_day: "Friday",
				week_number: 22
			}
		};
		const result = processProducts(state, cart);

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 10
			}
		];
		/*expect(normalizeResult(result)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount,
					product: product
				}))
			)
		);*/
		for (let i = 0; i < result.length; i++) {
			expect(result[i].getResult()).toEqual({discounts: expectedDiscount, product: products[i]});
		}
	});
});
