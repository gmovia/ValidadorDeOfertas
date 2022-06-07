import {ProductFactory} from '../src/factory/productFactory'

const products = require('../products.json');
const factory = new ProductFactory(products);

it("Dado que existe un producto con codigo AB001 en el JSON, cuando creo un objeto producto con codigo AB001, obtengo un producto con codigo AB001", ()=>{
    const product = factory.createProduct("AB001");
    expect(product.getCode()).toBe("AB001");
})

it("Dado que no existe un producto con codigo ZW100 en el JSON, cuando intento crear un objeto producto con codigo ZW100 se produce un error", ()=>{
    expect(() => { factory.createProduct("ZW100"); }).toThrow(Error);
})