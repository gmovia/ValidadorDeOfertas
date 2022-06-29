import { TypeProduct } from "../type/typeProduct";
import { ObjectRule } from "./objectRule";

export class Product extends ObjectRule{

    constructor(name: string, brandCode: string, brandName: string, categoryCode: string , categoryName: string, price: number, iva_percentage: number, code: string){
        super();
        this.dictionary.set("PRODUCT.name", name);
        this.dictionary.set("PRODUCT.brand.code", brandCode);
        this.dictionary.set("PRODUCT.brand.name", brandName);
        this.dictionary.set("PRODUCT.category.code", categoryCode);
        this.dictionary.set("PRODUCT.category.name", categoryName);
        this.dictionary.set("PRODUCT.price", price);
        this.dictionary.set("PRODUCT.iva_percentage", iva_percentage);
        this.dictionary.set("PRODUCT.code", code);
    }

    getName(): string{
        return this.dictionary.get("PRODUCT.name");
    }

    getBrandCode(): string{
        return this.dictionary.get("PRODUCT.brand.code");
    }

    getBrandName(): string{
        return this.dictionary.get("PRODUCT.brand.name");
    }

    getCategoryCode(): string{
        return this.dictionary.get("PRODUCT.category.code");
    }

    getCategoryName(): string{
        return this.dictionary.get("PRODUCT.category.name");
    }

    getPrice(): number{
        return this.dictionary.get("PRODUCT.price");
    }

    getIvaPercentage(): number{
        return this.dictionary.get("PRODUCT.iva_percentage");
    }

    getCode(): string{
        return this.dictionary.get("PRODUCT.code");
    }

    calculatePrice(): number{
        return this.dictionary.get("PRODUCT.price")*(1 + this.dictionary.get("PRODUCT.iva_percentage")/100);
    }

    getProduct(): TypeProduct{
        return {name: this.getName(),
                brand: {code: this.getBrandCode(),
                        name: this.getBrandName()},
                category: {code: this.getCategoryCode(),
                           name: this.getCategoryName()},
                price: this.getPrice(),
                iva_percentage: this.getIvaPercentage(),
                code: this.getCode()};
    }
}

