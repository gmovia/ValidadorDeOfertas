import {Product} from '../objectRule/product'

export class ShoppingCart{

    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>();
    }

    add(product: Product): void{
        this.products.push(product);
    }

    quantityOfProducts(): number{
        return this.products.length;
    }

    calculateCost(): number{
        var cost = 0;
        for(let product of this.products){
            cost += product.calculatePrice();
        }
        return cost;
    }
}