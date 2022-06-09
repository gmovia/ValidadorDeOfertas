import { AND } from "../src/logicalCondition/AND"
import { OR } from "../src/logicalCondition/OR"
import { NOT } from "../src/logicalCondition/NOT"

it("Dado un arreglo de booleanos con 3 true y 1 false, cuando ejecuto la compuerta AND, obtengo false",()=>{
    const and = new AND();
    expect(and.calculate([true, true, true, false])).toBe(false);
})

it("Dado un arreglo de booleanos con 5 true, cuando ejecuto la compuerta AND, obtengo true",()=>{
    const and = new AND();
    expect(and.calculate([true, true, true, true, true])).toBe(true);
})

it("Dado un arreglo de booleanos con 2 false y 1 true, cuando ejecuto la compuerta OR, obtengo true",()=>{
    const or = new OR();
    expect(or.calculate([false, false, true])).toBe(true);
})

it("Dado un arreglo de booleanos con 2 false, cuando ejecuto la compuerta OR, obtengo false",()=>{
    const or = new OR();
    expect(or.calculate([false, false])).toBe(false);
})

it("Dado un arreglo de booleanos con 1 false, cuando ejecuto la compuerta NOT, obtengo true",()=>{
    const not = new NOT();
    expect(not.calculate([false])).toBe(true);
})

it("Dado un arreglo de booleanos con 1 true, cuando ejecuto la compuerta NOT, obtengo false",()=>{
    const not = new NOT();
    expect(not.calculate([true])).toBe(false);
})