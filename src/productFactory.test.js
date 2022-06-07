var ProductFactory= require('./productFactory');

describe("Test product", ()=> {
    it("Creo producto correctamente", ()=>{
        const factory = new ProductFactory("./products.json");
        const code = "AB001";
        const product = factory.createProduct("AB001");
        expect(product.getCode()).toBe(code);
    })
})