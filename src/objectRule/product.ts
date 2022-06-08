import { ObjectRule } from "./objectRule";

export class Product extends ObjectRule{

    private product;

    constructor(name: string, brandCode: string, brandName: string, 
                categoryCode:string , categoryName: string, price: number, 
                iva_porcentage: number, code: string){

        super();
        this.product = new Map<string, any>();
        this.product.set("PRODUCT.name", name);
        this.product.set("PRODUCT.brand.code", brandCode);
        this.product.set("PRODUCT.brand.name", brandName);
        this.product.set("PRODUCT.category.code", categoryCode);
        this.product.set("PRODUCT.category.name", categoryName);
        this.product.set("PRODUCT.price", price);
        this.product.set("PRODUCT.iva_porcentage", iva_porcentage);
        this.product.set("PRODUCT.code", code);
    }

    translate(data: string){
        return this.product.get(data)
    }

    getCode(){
        return this.product.get("PRODUCT.code");
    }
}

