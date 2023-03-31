import React from 'react';
import { CalendarDayWeekProps } from '../types/CalendarTypes';
import { buildDaysWeek } from '../utils/Builder';

const calendarDayWeek = ( props: CalendarDayWeekProps ) => {
  let daysOfWeekSort = buildDaysWeek(props);
 
  return (
    <div className = 'evtcalDay'>
      {
        daysOfWeekSort.map((day:any, count:number) => {
          return (
            <div style = {{ width: '14.28571428571429%' }} className = 'evtcalDayTitle' key = { count }>
              { day }
            </div>
          )
        })
      }
    </div>
  )
}

export default calendarDayWeek;