import React, { memo, useEffect, useReducer } from 'react';
import { buildMonthCalendar } from '../utils/Builder';
import CalendarBodyItem from './calendarBodyItem';
import { CalendarBodyProps, EventCalendarType, MonthCalendarType } from '../types/CalendarTypes';

const CalendarBody = ({ options, events, holidays, onClickEvent, onClickDay, setSeletedEvent }: CalendarBodyProps) => {

  const [buildDays, setBuildDays] = useReducer((_: any, data: MonthCalendarType | null) => data, null)
 
  useEffect(() => {
    const build = buildMonthCalendar({ ...options, events, holidays })
    setBuildDays({ ...build });
  }, [options, events, holidays])
  

  const _onClickEvent = (event: EventCalendarType, ref: React.MutableRefObject<HTMLDivElement>) => {
    if (onClickEvent) return onClickEvent(event, ref);
    setSeletedEvent(event);
  }

  return (
    <div className='evtcalBody'>
      {buildDays && buildDays.weeks.map((week, count: number) => (
        <div key={count} className='evtcalRow'>
          {week.map((dayOfWeek, key: number) => (
            <CalendarBodyItem
              key={key}
              dayOfWeek={dayOfWeek}
              onClickEvent={_onClickEvent}
              //onMouseOverEvent={_onMouseOverEvent}
              onClickDay={onClickDay}
            />
          ))
          }
        </div>
      ))
      }
    </div>

  )
}

export default memo(CalendarBody);