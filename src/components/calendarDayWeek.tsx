import React from 'react';
import { CalendarDayWeekProps } from '../types/CalendarTypes';
import { buildDaysWeek } from '../utils/Builder';

const calendarDayWeek = ( props: CalendarDayWeekProps ) => {
  let daysOfWeekSort = buildDaysWeek(props);
 
  return (
    <div style = {{ display: 'flex' }} className = 'calendar-day'>
      {
        daysOfWeekSort.map((day:any, count:number) => {
          return (
            <div style = {{ width: '14.28571428571429%' }} className = 'calendar-day-col' key = { count }>
              { day }
            </div>
          )
        })
      }
    </div>
  )
}

export default calendarDayWeek;