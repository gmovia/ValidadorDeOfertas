export interface TypeCalendar{
	year: string | number;
	month: string | number;
	day_number: number;
	week_day:
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday"
		| "Sunday";
	week_number: number;
}