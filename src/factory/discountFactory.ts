import { Fix } from '../discount/fix'
import { Percentage } from '../discount/percentage'
import {Discount} from '../discount/discount'

export class DiscountFactory{

    createDiscount(discount: any): Discount{
        if(discount.type == "FIX"){
            return new Fix(discount.value);
        }
        return new Percentage(discount.value);
    }
}