import { CalendarFactory } from "../../src/factory/calendarFactory";
import { cart } from "../../data/data"

it("Creacion del calendario",()=>{
    const factory = new CalendarFactory();
    const calendar = factory.createCalendar(cart.purchase_date);
    const year = cart.purchase_date.year;
    expect(calendar.getYear()).toBe(year);
});