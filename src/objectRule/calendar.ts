import { ObjectRule } from "./objectRule";

export class Calendar extends ObjectRule{

    constructor(year: string, month: string, day_number: number, week_day: string, week_number: number){
        super();
        this.dictionary.set("CALENDAR.year", year);
        this.dictionary.set("CALENDAR.month", month);
        this.dictionary.set("CALENDAR.day_number", day_number);
        this.dictionary.set("CALENDAR.week_day", week_day);
        this.dictionary.set("CALENDAR.week_number", week_number);
    }

    getYear(){
        return this.dictionary.get("CALENDAR.year");
    }
}

