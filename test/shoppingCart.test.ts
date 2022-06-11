import { Product } from '../src/objectRule/product';
import {ShoppingCart} from '../src/shoppingCart/shoppingCart'
import {AtomicRule} from '../src/rule/atomicRule'
import {Equals} from '../src/TypeStrategy/equals'
import {Higher} from '../src/TypeStrategy/higher'
import {Offer} from '../src/offer/offer'
import {Percentage} from '../src/discount/percentage'
import { Payment } from '../src/objectRule/payment';
import { Calendar } from '../src/objectRule/calendar';
import { Fix } from '../src/discount/fix';

const payment = new Payment("CREDIT", "GALICIA");
const calendar = new Calendar("2022", "JUNE", 20, "Thursday", 4);

it("Cuando creo un carrito de compras esta vacio", ()=>{
    const cart = new ShoppingCart(payment, calendar);
    expect(cart.quantityOfProducts()).toBe(0);
})

it("Cuando agrego un producto al carrito de compras, el carrito tendra un producto", ()=>{
    const cart = new ShoppingCart(payment, calendar);
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 19.20, 21, "AB001"));
    expect(cart.quantityOfProducts()).toBe(1);
})

it("Cuando agrego un producto con precio 20 y un iva del 20% al carrito de compras, el precio del carrito sera de 24", ()=>{
    const cart = new ShoppingCart(payment, calendar);
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 20, 20, "AB001"));
    expect(cart.calculateCost()).toBe(24);
})


it("Cuando agrego un producto lacteo con precio 20 y un iva del 20% al carrito de compras, y le aplico una oferta del 10% de descuento, el precio del carrito sera 21.6", ()=>{
    const cart = new ShoppingCart(payment, calendar);
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X033XXX", "Lacteo", 20, 20, "AB001"));
    
    const ruleLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const discount = new Percentage(10);
   
    const offer = new Offer("10% descuento en producto lacteo", "0F001", ruleLacteo, discount); 
    cart.applyOffer(offer);

    expect(cart.calculateCost()).toBe(21.6);
})

it("Prueba de integracion 1", ()=>{
    const cart = new ShoppingCart(payment, calendar);
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X033XXX", "Lacteo", 20, 20, "AB001"));
    cart.add(new Product("Chocolinas", "DEFG123", "La Serenisima", "ABCDEFG", "Lacteo", 20, 20, "AB002"));

    const ruleLacteo = new AtomicRule("PRODUCTO_LACTEO", new Equals(), "PRODUCT.category.code", "X033XXX");
    const rule10 = new AtomicRule("R1", new Higher(), "PRODUCT.price", 10);

    const discountPercentage = new Percentage(10);
    const discountFix = new Fix(5);
   
    const offer1 = new Offer("10% descuento en producto lacteo", "0F001", ruleLacteo, discountPercentage); 
    cart.applyOffer(offer1);

    const offer2 = new Offer("5 de descuento sobre productos con precio mayor a 10", "0F002", rule10, discountFix); 
    cart.applyOffer(offer2);

    expect(cart.calculateCost()).toBe(35.6); 
})





