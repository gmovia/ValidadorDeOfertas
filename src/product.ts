export class Product{

    private price: number;
    private code: string;

    constructor(price: number, code: string){
        this.price = price;
        this.code = code;
    }

    getCode(){
        return this.code;
    }

    getPrice(){
        return this.price;
    }

}

