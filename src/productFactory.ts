import {Product} from './product'

export class ProductFactory{

    private path: string;

    constructor(path: string){
        this.path = path;
    }

    createProduct(code: string){
        const products = require(this.path);
        for(let product of products){
            if(product.code == code){
                return new Product(
                    product.price,
                    product.code
                    );
            }
        }
        throw new Error("El producto no existe");
    }
}

