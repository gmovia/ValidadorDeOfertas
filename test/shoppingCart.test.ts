import { Product } from '../src/objectRule/product';
import {ShoppingCart} from '../src/shoppingCart/shoppingCart'

it("Cuando creo un carrito de compras esta vacio", ()=>{
    const cart = new ShoppingCart();
    expect(cart.quantityOfProducts()).toBe(0);
})

it("Cuando agrego un producto al carrito de compras, el carrito tendra un producto", ()=>{
    const cart = new ShoppingCart();
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 19.20, 21, "AB001"));
    expect(cart.quantityOfProducts()).toBe(1);
})

it("Cuando agrego un producto con precio 20 y un iva del 20% al carrito de compras, el precio del carrito sera de 24", ()=>{
    const cart = new ShoppingCart();
    cart.add(new Product("Leche Descremada 1L serenisima", "DEFG123", "La Serenisima", "X04ABXX", "Lacteo", 20, 20, "AB001"));
    expect(cart.calculateCost()).toBe(24);
})