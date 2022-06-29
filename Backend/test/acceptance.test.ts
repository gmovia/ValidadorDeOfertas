import { offers, products, rules, cart, offersExtra, rulesExtra } from "../data/data";
import { initializeOffers, processProducts } from "../src/test-driver";
import { TypeCart } from "../src/type/typeCart";
import { TypeDiscount } from "../src/type/typeDiscount";
import { normalizeResult } from "../src/normalize-result";
import { TypeProcessedProduct } from "../src/type/typeProcessedProduct";

describe("acceptance tests 1", () => {

	const state = initializeOffers(offers, rules);

	it("discounts dairy products in february", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CREDIT",
				entity: "SANTANDER"
			},
			purchase_date: {
				year: 2022,
				month: 2,
				day_number: 13,
				week_day: "Sunday",
				week_number: 7
			}
		};

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "PRODUCT_PERCENTAGE",
				value: 10
			}
		];

		const proccessProducts = processProducts(state, cart);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(normalizeResult(result)).toEqual(
			normalizeResult([
				{ discounts: expectedDiscount, product: products[0] },
				{ discounts: expectedDiscount, product: products[1] },
				{ discounts: expectedDiscount, product: products[2] }
			])
		);
    });

	
	it("should get 7 discount in a Fanta in June", () => {
		const fanta = products.filter(x => x.name === "Naranja 1L");
		const cart: TypeCart = {
			products: fanta,
			payment: {
				method: "CREDIT",
				entity: "SANTANDER"
			},
			purchase_date: {
				year: 2022,
				month: 6,
				day_number: 21,
				week_day: "Tuesday",
				week_number: 25
			}
		};

		const expectedDiscount = [
			{
				type: "FIX",
				value: 7
			}
		];

		const proccessProducts = processProducts(state, cart);
		
		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(result).toEqual([
			{ discounts: expectedDiscount, product: fanta[0] }
		]);

	});

	
	it("should not get 7 discount in a Fanta in July", () => {
		const fanta = products.filter(x => x.name === "Naranja 1L")[0];
		const cart: TypeCart = {
			products: [fanta],
			payment: {
				method: "CREDIT",
				entity: "SANTANDER"
			},
			purchase_date: {
				year: 2022,
				month: 7,
				day_number: 21,
				week_day: "Thursday",
				week_number: 29
			}
		};
		const proccessProducts = processProducts(state, cart);
		
		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(result).toEqual([]);
	});
	
	it("should get no discount in the bougth paying with Santander Credit in January", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CREDIT",
				entity: "SANTANDER"
			},
			purchase_date: {
				year: 2022,
				month: 1,
				day_number: 1,
				week_day: "Saturday",
				week_number: 1
			}
		};
		const proccessProducts = processProducts(state, cart);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(result).toEqual([]);
	});

	it("should get 25% discount in the bougth paying with Macro Credit in July", () => {
		const cart: TypeCart = {
			products,
			payment: {
				method: "CREDIT",
				entity: "MACRO"
			},
			purchase_date: {
				year: 2022,
				month: 7,
				day_number: 21,
				week_day: "Thursday",
				week_number: 29
			}
		};

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 25
			}
		];

		const proccessProducts = processProducts(state, cart);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(normalizeResult(result)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount,
					product: product
				}))
			)
		);

	});


	it("should get 15% discount in a Leche Chocolatada 1L in Febrary paying with Galicia", () => {
		const leche = products.filter(
			x => x.name === "Leche Chocolatada 1L, la Calmisima"
		);
		const cart: TypeCart = {
			products: leche,
			payment: {
				method: "CREDIT",
				entity: "Galicia"
			},
			purchase_date: {
				year: 2022,
				month: 2,
				day_number: 2,
				week_day: "Wednesday",
				week_number: 5
			}
		};

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "PRODUCT_PERCENTAGE",
				value: 15
			},
			{
				type: "PRODUCT_PERCENTAGE",
				value: 10
			}
		];

		const proccessProducts = processProducts(state, cart);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(normalizeResult(result)).toEqual(
			normalizeResult([{ discounts: expectedDiscount, product: leche[0] }])
		);

	});
});




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
		const expectedDiscount: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 30
			}
		];

		const proccessProducts = processProducts(state, cart);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}

		expect(normalizeResult(result)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount,
					product: product
				}))
			)
		);

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

		const expectedDiscount: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 10
			}
		];

		const proccessProducts = processProducts(state, cart);
		console.log(proccessProducts);

		const result: TypeProcessedProduct[] = [];
		for(let product of proccessProducts){
			result.push(product.getResult());
		}


		expect(normalizeResult(result)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount,
					product: product
				}))
			)
		);
	});
});


