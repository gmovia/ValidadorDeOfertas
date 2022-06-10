import { ObjectRule } from "./objectRule";

export class Product extends ObjectRule{

    constructor(name: string, brandCode: string, brandName: string, categoryCode:string , categoryName: string, price: number, iva_porcentage: number, code: string){
        super();
        this.dictionary.set("PRODUCT.name", name);
        this.dictionary.set("PRODUCT.brand.code", brandCode);
        this.dictionary.set("PRODUCT.brand.name", brandName);
        this.dictionary.set("PRODUCT.category.code", categoryCode);
        this.dictionary.set("PRODUCT.category.name", categoryName);
        this.dictionary.set("PRODUCT.price", price);
        this.dictionary.set("PRODUCT.iva_porcentage", iva_porcentage);
        this.dictionary.set("PRODUCT.code", code);
    }

    getCode(){
        return this.dictionary.get("PRODUCT.code");
    }

    calculatePrice(){
        return this.dictionary.get("PRODUCT.price")*(1 + this.dictionary.get("PRODUCT.iva_porcentage")/100);
    }
}

