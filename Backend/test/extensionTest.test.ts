import { products, offers, rules} from "../data/data";
import { rulesWithMissingLinks, offersWithMissingLinks, offersWithLoop, rulesWithLoop } from "../data/data";
import { initializeOffers, processProducts } from "../src/test-driver";
import { TypeCart } from "../src/type/typeCart";
import { TypeDiscount } from "../src/type/typeDiscount";
import { normalizeResult } from "../src/normalize-result";
import {offersExtra, rulesExtra} from "../data/data";
import { TypeProcessedProduct } from "../src/type/typeProcessedProduct";

describe("extension tests", () => {
	const someCart: TypeCart = {
		products,
		payment: {
			method: "CREDIT",
			entity: "SANTANDER"
		},
		purchase_date: {
			year: 2022,
			month: 1,
			day_number: 3,
			week_day: "Monday",
			week_number: 1
		}
	};

	it("should reject offers with a missing rule", () => {
		expect(() => {
			const state = initializeOffers(offersWithMissingLinks, rulesWithMissingLinks);
			processProducts(state, someCart);
		}).toThrow();
	});

	it("should reject offers with a rule loop", () => {
		expect(() => {
			const state = initializeOffers(offersWithLoop, rulesWithLoop);
			processProducts(state, someCart);
		}).toThrow();
	});

	it("should accept empty offers", () => {
        const state = initializeOffers([], []);

		const result = processProducts(state, someCart);
		expect(result).toEqual([]);
	});

	it("should accept interleaved use of multiple offer sets", () => {
		const state1 = initializeOffers(offers, rules);
		const state2 = initializeOffers(offersExtra, rulesExtra);

		const cart1: TypeCart = {
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
		

		const expectedDiscount1: TypeDiscount[] = [
			{
				type: "PRODUCT_PERCENTAGE",
				value: 10
			}
		];

        const proccessProducts1 = processProducts(state1, cart1);

		const result1: TypeProcessedProduct[] = [];
		for(let product of proccessProducts1){
			result1.push(product.getResult());
		}
		expect(normalizeResult(result1)).toEqual(
			normalizeResult([
				{ discounts: expectedDiscount1, product: products[0] },
				{ discounts: expectedDiscount1, product: products[1] },
				{ discounts: expectedDiscount1, product: products[2] }
			])
		);

		const cart2: TypeCart = {
			products,
			payment: {
				method: "CASH",
				entity: "ARS"
			},
			purchase_date: {
				year: 1996,
				month: 2,
				day_number: 22,
				week_day: "Thursday",
				week_number: 8
			}
		};


		const expectedDiscount2: TypeDiscount[] = [
			{
				type: "CART_PERCENTAGE",
				value: 30
			}
		];

        const proccessProducts2 = processProducts(state2, cart2);

		const result2: TypeProcessedProduct[] = [];
		for(let product of proccessProducts2){
			result2.push(product.getResult());
		}

		expect(normalizeResult(result2)).toEqual(
			normalizeResult(
				products.map(product => ({
					discounts: expectedDiscount2,
					product: product
				}))
			)
		);
	});
});

