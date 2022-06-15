import { ProductFactory } from "../../src/factory/productFactory";
import { products } from "../../data/data"

it("Creacion de producto",()=>{
    const factory = new ProductFactory();
    const product = factory.createProduct(products[0]);

    const code = products[0].code;
    expect(product.getCode()).toBe(code);

    const category = products[0].category.code;
    expect(product.getCategoryCode()).toBe(category);
});