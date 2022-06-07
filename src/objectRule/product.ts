import { ObjectRule } from "./objectRule";

export class Product extends ObjectRule{

    private product: any;

    constructor(product: any){
        super();
        this.product = product;
    }

    isType(type: string){
        return type == "PRODUCT";
    }

    translate(data: string){
        return this.product[data];
    }

    getCode(){
        return this.product.code;
    }

    getValue(){
        return this.product.value;
    }
}

