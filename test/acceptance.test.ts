import { offers, products, rules } from "../data/data";
import { initializeOffers, processProducts } from "../src/test-driver";
import { TypeCart } from "../src/type/typeCart";

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
		const result = processProducts(state, cart);

        expect(result[0].getCode()).toBe(products[0].code);
        expect(result[1].getCode()).toBe(products[1].code);
        expect(result[2].getCode()).toBe(products[2].code);
    });
});
