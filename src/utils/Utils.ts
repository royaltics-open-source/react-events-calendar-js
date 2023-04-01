export function weekCountFromSunday(firstOfMonth: Date, lastOfMonth: Date) {
	const used = firstOfMonth.getDay() + lastOfMonth.getDate();
	return Math.ceil(used / 7);
}

export function weekCountFromMonday(firstOfMonth: Date, lastOfMonth: Date) {
	const used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();
	if(used / 7 == 6) return 5;
	return Math.floor(used / 7);
}


export const getCurrentDate = () => {
	let currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0)
	return currentDate
}

export const equalsMonth = (dateEvent: string | Date, dateCalendar: Date) => {
	const _parseDate = dateEvent instanceof Date ? new Date(dateEvent.getTime()) : new Date(dateEvent);
	_parseDate.setHours(0, 0, 0, 0);
	dateCalendar.setHours(0, 0, 0, 0);
	return _parseDate.getFullYear() === dateCalendar.getFullYear() && _parseDate.getMonth() === dateCalendar.getMonth();
}

export const equalsDays = (dateEvent: string | Date, dateCalendar: Date) => {
	const _parseDate = dateEvent instanceof Date ? new Date(dateEvent.getTime()) : new Date(dateEvent);
	return _parseDate.setHours(0, 0, 0, 0) === dateCalendar.getTime();
}


export const numberDayInYear = (year: any, x: any) => {
	let curTime = new Date(Number(x));
	let lastYear = new Date((year - 1), 11, 31);
	return (curTime.getTime() - lastYear.getTime()) / 86400000;
}


export const parseDate = (date: string | Date): string => {
	const _date = date instanceof Date ? date : new Date(date);
	return _date.getHours() + ":" + _date.getUTCMinutes();
}