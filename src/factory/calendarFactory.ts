import {Calendar} from '../objectRule/calendar'
import { TypeCalendar } from '../type/typeCalendar';

export class CalendarFactory{

    createCalendar(calendar: TypeCalendar): Calendar{
        return new Calendar(calendar.year,
                            calendar.month,
                            calendar.day_number,
                            calendar.week_day,
                            calendar.week_number
                            );
    }
}