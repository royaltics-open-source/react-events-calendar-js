import { daysOfWeek } from "../langs/days";
import { BuilderProps, CalendarDayWeekProps, DaysOfMonthType, MonthCalendarType } from "../types/CalendarTypes";
import { equalsDays, equalsMonth, getCurrentDate, weekCountFromMonday, weekCountFromSunday } from "./Utils";


export const buildDaysWeek = ({ startDayWeek, lang }: CalendarDayWeekProps): string[] => {
	let daysOfWeekLang = daysOfWeek[lang];
	return startDayWeek === 'SUN' ? [...daysOfWeekLang.slice(6), ...daysOfWeekLang.slice(0, 6)] : daysOfWeekLang;
}

export const buildDaysWeekIndex = (startDayWeek: CalendarDayWeekProps["startDayWeek"]): number[] => {
	return startDayWeek === 'SUN' ? [7, 1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5, 6, 7];
}


export const buildMonthCalendar = ({ year, monthIndex, events, holidays, startDayWeek }: BuilderProps): MonthCalendarType => {
	let _firstDayOfMonth = new Date(year, monthIndex, 1);
	let _lastDayOfMonth = new Date(year, monthIndex + 1, 0);
	let _currentDate = getCurrentDate();

	const monthCalendar: MonthCalendarType = {
		startDayWeek,
		countWeek: startDayWeek === 'MON' ? weekCountFromMonday(_firstDayOfMonth, _lastDayOfMonth) : weekCountFromSunday(_firstDayOfMonth, _lastDayOfMonth),
		weeks: [[]],
	}


	const _holidayOfMonth = Array.isArray(holidays) ? holidays.filter((hol) => hol.month == (monthIndex + 1)) : [] //get Filtered HoliDays of Month
	const _eventsOfMonth = Array.isArray(events) ? events.filter((event) => equalsMonth(event.date, new Date(year, monthIndex, 1))) : [] //get Filtered Events of Month
	const _dayOfWeeks = buildDaysWeekIndex(startDayWeek);
	const _startDayWeekIndex = startDayWeek === 'MON' ? 0 : 7;

	const monthFirstDayPosition = ((7 + _firstDayOfMonth.getDay() - (_startDayWeekIndex)) % 7) - 1
	let nextDay = 1 - monthFirstDayPosition;
	let thisDateMonth = new Date(year, monthIndex, 1);
	thisDateMonth.setHours(0, 0, 0, 0)

	//generate weeks
	for (let week = 0; week < monthCalendar.countWeek; week++) {
		let days: DaysOfMonthType[] = []

		//loop of index Days of weeks
		for (let _indexDays of _dayOfWeeks) {

			//Days out of the month
			if (nextDay <= 0 || nextDay > _lastDayOfMonth.getDate()) {
				days.push({
					day: '',
					time: thisDateMonth,
					isToday: false,
					holidays: [],
					events: []
				})
			} else {

				thisDateMonth.setDate(nextDay)

				days.push({
					day: nextDay,
					time: thisDateMonth,
					isToday: thisDateMonth.getTime() === _currentDate.getTime(),
					holidays: _holidayOfMonth.filter(hol => hol.day === nextDay),
					events: _eventsOfMonth.filter(event => equalsDays(event.date, thisDateMonth))
				})

			}

			nextDay++;
		}

		monthCalendar.weeks.push(days)
	}

	return monthCalendar;
}


/*
const buildPrevNextDays = (year: any, month: any, countDate: any, start: any, prevNext: any) => {
	let days = [];
	let stopCount = (prevNext == 'prev') ? (countDate - start) : (6 - countDate + start);
	let calcCurMonth = (prevNext == 'prev'
		? (month - 1) < 0 ? 11 : month - 1
		: (month + 1) > 11 ? 0 : month + 1
	);
	let calcCyrYear = (prevNext == 'prev'
		? (month - 1) < 0 ? year - 1 : year
		: (month + 1) > 11 ? +year + 1 : year
	);
	let calcCurD = calcCurDate(calcCurMonth, calcCyrYear);
	stopCount = (prevNext == 'prev'
		? (stopCount < 0) ? (7 - start) : stopCount
		: stopCount = (stopCount == 7) ? 0 : stopCount
	);

	for (let i = 0; i < stopCount; i++) {
		let countDay = (prevNext == 'prev'
			? new Date(year, month, (-i))
			: new Date(year, month + 1, (i + 1))
		);
		countDay.setHours(0, 0, 0, 0);
		let className = (countDay.getDay() == 0 || countDay.getDay() == 6) ? 'output' : '';

		if (countDay.getTime() == calcCurD.curDate) {
			className += ' curDate';
		}

		let dayParam = {
			id: countDay.getTime(),
			time: countDay.getTime(),
			day: countDay.getDate(),
			className: [...dayClass, (prevNext == 'prev') ? 'prev' : 'next', className],
			hint: []
		}

		if (prevNext == 'prev') {
			days.unshift({ ...dayParam })
		} else {
			days.push({ ...dayParam });
		}
	}
	return days;
}*/


