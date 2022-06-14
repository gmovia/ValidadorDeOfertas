import { Fix } from '../discount/fix'
import { Percentage } from '../discount/percentage'
import {Discount} from '../discount/discount'
import {TypeDiscount} from '../type/typeDiscount'

export class DiscountFactory{

    createDiscount(discount: TypeDiscount): Discount{
        if(discount.type == "FIX"){
            return new Fix(discount.value);
        }
        return new Percentage(discount.value);
    }
}