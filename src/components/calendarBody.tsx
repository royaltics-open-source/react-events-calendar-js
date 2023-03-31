import React from 'react';
import { buildMonthCalendar } from '../utils/Builder';
import CalendarBodyItem from './calendarBodyItem';
import { CalendarBodyProps, EventCalendarType } from '../types/CalendarTypes';

const CalendarBody = ({ options, onClickEvent,  onClickDay, setSeletedEvent }: CalendarBodyProps) => {

  let buildDays = buildMonthCalendar(options);

 /* const _onMouseOverEvent = (event: EventCalendarType, ref: React.MutableRefObject<HTMLDivElement>) => {
    if (onMouseOverEvent) return onMouseOverEvent(event, ref);
    ref.current.classList.add("hover")
  }
*/
  const _onClickEvent = (event: EventCalendarType, ref: React.MutableRefObject<HTMLDivElement>) => {
    if (onClickEvent) return onClickEvent(event, ref);
    setSeletedEvent(event);
  }

  return (
    <div className='evtcalBody'>
      {
        buildDays.weeks.map((week, count: number) => (
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

export default CalendarBody;