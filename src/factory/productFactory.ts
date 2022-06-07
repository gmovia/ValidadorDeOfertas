import {Product} from '../objectRule/product'

export class ProductFactory{

    private products: any;

    constructor(products: any){
        this.products = products;
    }

    createProduct(code: string){
        for(let product of this.products){
            if(product.code == code){
                return new Product(product);
            }
        }
        throw new Error('El producto no existe');
    }
}

