import {Product} from '../objectRule/product'

export class ProductFactory{

    createProduct(product: any): Product{
        return new Product(product["name"],
                           product["brand"]["code"],
                           product["brand"]["name"],
                           product["category"]["code"],
                           product["category"]["name"],
                           product["price"],
                           product["iva_porcentage"],
                           product["code"]
                           );
    }
}