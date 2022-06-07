import {Product} from '../src/objectRule/product'


it("Dado que creo un producto con codigo AB001, entonces cuando consulto el codigo del producto es AB001", ()=>{
    const productJSON = JSON.parse('{"code":"AB001"}');
    const product = new Product(productJSON);
    expect(product.getCode()).toBe('AB001');
})  

it("Dado que creo un producto con codigo BCD27, entonces cuando traduzco el codigo del producto obtengo BCD27", ()=>{
    const productJSON = JSON.parse('{"code":"BCD27"}');
    const product = new Product(productJSON);
    expect(product.translate("code")).toBe('BCD27');
})  
