import { CalendarFactory } from "../src/factory/calendarFactory";

const calendarJSON = require("../data/dataJSON/shoppingCart.json");

it("Creacion del calendario",()=>{
    const factory = new CalendarFactory();
    const calendar = factory.createCalendar(calendarJSON["purchase_date"]);
    const year = calendarJSON["purchase_date"]["year"];
    expect(calendar.translate("CALENDAR.year")).toBe(year);
});