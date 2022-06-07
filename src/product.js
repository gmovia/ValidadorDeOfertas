class Product{

    constructor(name, brand, category, price, IVA, code){
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.IVA = IVA;
        this.code = code;
    }

    getCode(){
        return this.code;
    }

    getPrice(){
        return this.price;
    }

}

module.exports = Product;