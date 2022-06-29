import { TypeDiscount } from "./type/typeDiscount";
import { TypeProcessedProduct } from "./type/typeProcessedProduct";

export function normalizeResult(
	products: TypeProcessedProduct[]
): TypeProcessedProduct[] {
	function comparePrimitive<T>(left: T, right: T): number {
		return left === right ? 0 : left < right ? -1 : 1;
	}
	const compareDiscount = (left: TypeDiscount, right: TypeDiscount) =>
		comparePrimitive(left.type, right.type) ||
		comparePrimitive(left.value, right.value);

	return products
		.map(product => ({
			product: product.product,
			discounts: product.discounts.sort(compareDiscount)
		}))
		.sort((left, right) => {
			const l = JSON.stringify(left);
			const r = JSON.stringify(right);
			return comparePrimitive(l, r);
		});
}

