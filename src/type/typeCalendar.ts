export interface TypeCalendar{
	year: string;
	month: string;
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