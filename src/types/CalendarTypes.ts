
export type EventType = {
  id?: string,
  title: string,
  date: any,
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
  visibleYear?: boolean,
  startDayWeek?: number,
  holiday?: number,

}


export interface CalendarProps extends CalendarOptions, CalendarBodyItemActions {
  events?: EventType[],
  style?: React.CSSProperties
}




//CalendarHeadProps

export interface CalendarHeadProps {
  options: CalendarOptions
}

export interface CalendarDayProps {
  startDayWeek?: number,
  lang: string
}

export interface CalendarBodyProps extends CalendarBodyItemActions {
  options: CalendarOptions,

}
export interface CalendarBodyItemProps extends CalendarBodyItemActions {
  itemDay: ItemDayType,
}

export interface ItemDayType {
  time: string,
  day: string,
  color?:string,
  number?: string,
  events: EventType[]
}


export interface CalendarBodyItemActions {
  onClick?: (time: string, refEl: any) => void,
  onMouseOver?: (time: string, refEl: any) => void,
  onMouseOut?: (time: string, refEl: any) => void,
}

export type LangInterface = {
  [key: 'ru' | 'es' | 'en' | 'de' | 'fr' | 'su' | string]: string[]
}
