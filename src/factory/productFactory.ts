import {Product} from '../objectRule/product'
import {TypeProduct} from '../type/typeProduct'

export class ProductFactory{

    createProduct(product: TypeProduct): Product{
        return new Product(product["name"],
                           product["brand"]["code"],
                           product["brand"]["name"],
                           product["category"]["code"],
                           product["category"]["name"],
                           product["price"],
                           product["iva_percentage"],
                           product["code"]
                           );
    }
}