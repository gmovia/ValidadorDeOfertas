import { CalendarFactory } from "./calendarFactory";
import { PaymentFactory } from "./paymentFactory";
import { ShoppingCart } from "../shoppingCart/shoppingCart";
import { ProductFactory } from "./productFactory";
import { TypeCart } from '../type/typeCart'

export class ShoppingCartFactory{
    
    private productFactory: ProductFactory;
    private calendarFactory: CalendarFactory;
    private paymentFactory: PaymentFactory;  
    
    constructor(){
        this.productFactory = new ProductFactory();
        this.calendarFactory = new CalendarFactory();
        this.paymentFactory = new PaymentFactory();   
    }

    createShoppingCart(shoppingCart: TypeCart): ShoppingCart{
        const calendar = this.calendarFactory.createCalendar(shoppingCart.purchase_date);
        const payment = this.paymentFactory.createPayment(shoppingCart.payment);
        const cart = new ShoppingCart(payment, calendar);

        for(let product of shoppingCart.products){
            cart.add(this.productFactory.createProduct(product));
        }

        return cart;
    }
}