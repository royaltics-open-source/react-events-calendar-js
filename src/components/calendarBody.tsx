import React from 'react';
import { buildDaysWeekIndex, buildMonthCalendar } from '../utils/Builder';
import CalendarBodyItem from './calendarBodyItem';
import { CalendarBodyProps } from '../types/CalendarTypes';

const CalendarBody = ({ options, onClick, onMouseOver, onMouseOut }: CalendarBodyProps) => {

  //let stopCount = dayInMonth(options.year, options.month);
  let buildDays = buildMonthCalendar(options);
  let dayOfWeeks = buildDaysWeekIndex(buildDays.startDayWeek);

  return (
    <div className='calendar-body'>
      {
        buildDays.weeks.map((week, count: number) => (
          <div style={{ display: 'flex' }} key={count} className='calendar-body-row'>

            { week.map((dayOfWeek, key: number) => (

                <div className='day' key={key}>
                  <CalendarBodyItem dayOfWeek={dayOfWeek} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />
                </div>
            ))
            }

          </div>
        ))
      }
    </div>
 
  )
}

export default CalendarBody;