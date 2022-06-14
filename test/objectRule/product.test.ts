import {Product} from '../../src/objectRule/product'

it("Dado que creo un producto con codigo AB001, entonces cuando consulto el codigo del producto es AB001", ()=>{
    let name = "Leche Descremada 1L serenisima";
    let brandCode = "DEFG123";
    let brandName = "La Serenisima";
    let categoryCode = "X04ABXX";
    let categoryName = "Lacteo";
    let price = 19.20;
    let iva_porcentage = 21.0;
    let code = "AB001";

    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, code);
    expect(product.getCode()).toBe("AB001");
})  

it("Dado que creo un producto con precio 15 y iva 10, entonces cuando consulto el precio del producto es 16,5", ()=>{
    let name = "Leche Descremada 1L serenisima";
    let brandCode = "DEFG123";
    let brandName = "La Serenisima";
    let categoryCode = "X04ABXX";
    let categoryName = "Lacteo";
    let price = 15;
    let iva_porcentage = 10;
    let code = "AB001";

    const product = new Product(name, brandCode, brandName, categoryCode, categoryName, price, iva_porcentage, code);
    expect(product.calculatePrice()).toBe(16.5);
})  