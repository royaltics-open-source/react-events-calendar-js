
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
  year?: number,
  month?: number,
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
  setOptions: React.Dispatch<React.SetStateAction<CalendarOptions>>
}

export interface CalendarDayWeekProps {
  startDayWeek: 'MON' | 'SUN',
  lang: string
}

export interface CalendarShowEventProps {
  seletedEvent: EventCalendarType,

}

export interface CalendarBodyProps extends CalendarBodyItemActions {
  options: CalendarOptions,
  setSeletedEvent: React.Dispatch<React.SetStateAction<EventCalendarType>>
}

export interface CalendarBodyItemProps extends CalendarBodyItemActions {
  dayOfWeek: DaysOfMonthType,
  className?: string,

}



export interface CalendarBodyItemActions {
  onClickDay?: (time: Date | string, refEl: React.MutableRefObject<HTMLDivElement>) => void,
  //OnMouse Over with css
  // onMouseOverEvent?: (event: EventCalendarType, refEl: React.MutableRefObject<HTMLDivElement>) => void,
  onClickEvent?: (event: EventCalendarType, refEl: React.MutableRefObject<HTMLDivElement>) => void,
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
  day: number | string,
  time: Date,
  dayOfWeek?: string | number,
  color?: string,
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