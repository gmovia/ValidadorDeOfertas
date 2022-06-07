var Product = require('./product');

class ProductFactory{

    constructor(path){
        this.path = path;
    }

    createProduct(code){
        const products = require(this.path);
        for(let product of products){
            if(product.code == code){
                return new Product(product.name,
                    product.brand,
                    product.category,
                    product.IVA,
                    product.price,
                    product.code);
            }
        }
        throw new Error("El producto no existe");
    }
}

module.exports = ProductFactory;
