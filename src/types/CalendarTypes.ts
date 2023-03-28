
export type EventCalendarType = {
  id?: string,
  title: string,
  date: Date | string,
  color: 'red' | 'blue' | 'yellow' | 'green' | 'black' | string,
  description?: string,
  lnk?: string,
  onClick?: (evt: Event) => void
}

//Data Internal COmponent

export interface CalendarOptions {
  lang?: 'es' | 'en',
  year: number,
  month: number,
  startDayWeek: 'SUN' | 'MON',
  visibleYear?: boolean,
  holidays?: holyDayType[],
  events?: EventCalendarType[]

}


export interface CalendarProps extends CalendarOptions, CalendarBodyItemActions {
  events?: EventCalendarType[],
  style?: React.CSSProperties
}




//CalendarHeadProps

export interface CalendarHeadProps {
  options: CalendarOptions
}

export interface CalendarDayWeekProps {
  startDayWeek: 'MON'|'SUN',
  lang: string
}

export interface CalendarBodyProps extends CalendarBodyItemActions {
  options: CalendarOptions,

}
export interface CalendarBodyItemProps extends CalendarBodyItemActions {
  dayOfWeek: DaysOfMonthType,
}



export interface CalendarBodyItemActions {
  onClick?: (time: Date|string, refEl: any) => void,
  onMouseOver?: (time:  Date|string, refEl: any) => void,
  onMouseOut?: (time:  Date|string, refEl: any) => void,
}

export type LangInterface = {
  [key: 'ru' | 'es' | 'en' | 'de' | 'fr' | 'su' | string]: string[]
}


export type holyDayType = {
  year: number,
  month: number,
  day: number,
  title: string,
  description?: string,
  color: string,
}


export type DaysOfMonthType = {
  day: number|string,
  time: Date,
  dayOfWeek?: string | number,
  color?:string,
  isCurrent: boolean,
  holidays: holyDayType[],
  events: EventCalendarType[]
}



export type MonthCalendarType = {
  startDayWeek: 'SUN' | 'MON',
  weeks: DaysOfMonthType[][],
  countWeek: number,
  //days: DaysOfMonthType[]
}