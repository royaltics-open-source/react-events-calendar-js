import React from 'react';
import { buildMonthCalendar } from '../utils/Builder';
import CalendarBodyItem from './calendarBodyItem';
import { CalendarBodyProps } from '../types/CalendarTypes';

const CalendarBody = ({ options, onClick, onMouseOver, onMouseOut }: CalendarBodyProps) => {

  //let stopCount = dayInMonth(options.year, options.month);
  let buildDays = buildMonthCalendar(options);

  return (
    <div className='evtcalBody'>
      {
        buildDays.weeks.map((week, count: number) => (
          <div key={count} className='evtcalRow'>

            { week.map((dayOfWeek, key: number) => (

                  <CalendarBodyItem  key={key} dayOfWeek={dayOfWeek} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
            ))
            }

          </div>
        ))
      }
    </div>
 
  )
}

export default CalendarBody;