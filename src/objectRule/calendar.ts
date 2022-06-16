import { ObjectRule } from "./objectRule";

export class Calendar extends ObjectRule{

    constructor(year: string | number, month: string | number, day_number: number, week_day: string, week_number: number){
        super();
        this.dictionary.set("CALENDAR.year", year);
        this.dictionary.set("CALENDAR.month", month);
        this.dictionary.set("CALENDAR.day_number", day_number);
        this.dictionary.set("CALENDAR.week_day", week_day);
        this.dictionary.set("CALENDAR.week_number", week_number);
    }

    getYear(): string {
        return this.dictionary.get("CALENDAR.year");
    }

    getMonth(): string | number{
        return this.dictionary.get("CALENDAR.month");
    }

    getDayNumber(): number {
        return this.dictionary.get("CALENDAR.day_number");
    }

    getWeekDay(): string {
        return this.dictionary.get("CALENDAR.week_day");
    }

    getWeekNumber(): number {
        return this.dictionary.get("CALENDAR.week_number");
    }
}

