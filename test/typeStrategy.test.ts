import { Equals } from "../src/TypeStrategy/equals"
import { Distinct } from "../src/TypeStrategy/distinct"
import { Higher } from "../src/TypeStrategy/higher"
import { Lower } from "../src/TypeStrategy/lower"
import { In } from "../src/TypeStrategy/in"


it("La estrategia de tipo equals devuelve true cuando se aplica sobre los valores 1 y 1", ()=> {
    const strategy = new Equals();
    expect(strategy.isApply(1, 1)).toBe(true);
})

it("La estrategia de tipo equals devuelve false cuando se aplica sobre los valores 1 y 2", ()=> {
    const strategy = new Equals();
    expect(strategy.isApply(1, 2)).toBe(false);
})

it("La estrategia de tipo distinct devuelve true cuando se aplica sobre los valores 1 y 2", ()=> {
    const strategy = new Distinct();
    expect(strategy.isApply(1, 2)).toBe(true);
})

it("La estrategia de tipo distinct devuelve false cuando se aplica sobre los valores 2 y 2", ()=> {
    const strategy = new Distinct();
    expect(strategy.isApply(2, 2)).toBe(false);
})

it("La estrategia de tipo higher devuelve true cuando se aplica sobre los valores 2 y 1", ()=> {
    const strategy = new Higher();
    expect(strategy.isApply(2, 1)).toBe(true);
})

it("La estrategia de tipo higher devuelve false cuando se aplica sobre los valores 2 y 3", ()=> {
    const strategy = new Higher();
    expect(strategy.isApply(2, 3)).toBe(false);
})

it("La estrategia de tipo lower devuelve true cuando se aplica sobre los valores 1 y 2", ()=> {
    const strategy = new Lower();
    expect(strategy.isApply(1, 2)).toBe(true);
})

it("La estrategia de tipo lower devuelve false cuando se aplica sobre los valores 3 y 0", ()=> {
    const strategy = new Lower();
    expect(strategy.isApply(3, 0)).toBe(false);
})

it("La estrategia de tipo in devuelve true cuando se aplica sobre los valores 1 y [1,2]", ()=> {
    const strategy = new In();
    expect(strategy.isApply(1, [1, 2])).toBe(true);
})

it("La estrategia de tipo in devuelve false cuando se aplica sobre los valores 2 y [1, 3]", ()=> {
    const strategy = new In();
    expect(strategy.isApply(2, [1, 3])).toBe(false);
})

