import {Calendar} from '../objectRule/calendar'

export class CalendarFactory{

    createCalendar(calendar: any): Calendar{
        return new Calendar(calendar["year"],
                            calendar["month"],
                            calendar["day_number"],
                            calendar["week_day"],
                            calendar["week_number"]
                            );
    }
}