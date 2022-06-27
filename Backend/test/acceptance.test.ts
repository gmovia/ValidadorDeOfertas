import { offers, products, rules, cart } from "../data/data";
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
		const result = processProducts(state, cart);
		expect(result[0].getCode()).toBe(fanta[0].code);
		const price = fanta[0].price*(1+fanta[0].iva_percentage/100)
		expect(result[0].calculatePrice()).toBe(price - 7);
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
		const result = processProducts(state, cart);
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
		const result = processProducts(state, cart);
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
		const result = processProducts(state, cart);
		for(let i=0; i<products.length; i++){
			expect(products[i].code).toBe(result[i].getCode());
			expect(result[i].calculatePrice()).toBe(products[i].price*(1+products[i].iva_percentage/100)*0.75);
		}
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
		const result = processProducts(state, cart);
		expect(result[0].getCode()).toEqual(leche[0].code);
	});
});