export function weekCountFromSunday(year:number, month: number) {
    // month_number is in the range 1..12
    const firstOfMonth = new Date(year, month-1, 1);
    const lastOfMonth = new Date(year, month, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.ceil( used / 7);
}

export function weekCountFromMonday(year:number, month: number) {
    // month_number is in the range 1..12
    const firstOfMonth = new Date(year, month-1, 1);
    const lastOfMonth = new Date(year, month, 0);
    const used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();
    return Math.ceil( used / 7);
}


export const getCurrentDate = () => {
	let currentDate = new Date().setHours(0, 0, 0, 0);
	return currentDate
}

export const equalsMonth = (dateEvent: string | Date, dateCalendar: Date) => {
	const _parseDate = dateEvent instanceof Date ? dateEvent : new Date(dateEvent);
	_parseDate.setHours(0, 0, 0, 0);
	dateCalendar.setHours(0, 0, 0, 0);
	return _parseDate.getFullYear() === dateCalendar.getFullYear() && _parseDate.getMonth() === dateCalendar.getMonth();
}

export const equalsDays = (dateEvent: string | Date, dateCalendar: Date) => {
	const _parseDate = dateEvent instanceof Date ? dateEvent : new Date(dateEvent);
	return _parseDate.setHours(0, 0, 0, 0) === dateCalendar.getTime();
}


export const numberDayInYear = (year: any, x: any) => {
	let curTime = new Date(Number(x));
	let lastYear = new Date((year - 1), 11, 31);
	return (curTime.getTime() - lastYear.getTime()) / 86400000;
}
