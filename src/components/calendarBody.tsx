import React from 'react';
import { dayInMonth, dayForWeek } from '../services/time';
import CalendarBodyItem from './calendarBodyItem';
import { CalendarBodyProps, ItemDayType } from '../types/CalendarTypes';

const CalendarBody = ( { options, onClick, onMouseOver, onMouseOut }: CalendarBodyProps) => {

  let stopCount = dayInMonth(options.year, options.month);
  let buildDays = dayForWeek(options.year, options.month, stopCount, options.startDayWeek, options.holiday);

  return (
    <div className = 'calendar-body'>
      {
        buildDays.map((week:any, count:any) => {
          return (
            <div style = {{ display: 'flex' }} key = { count } className = 'calendar-body-row'>
              { week.map((itemDay: ItemDayType) => {
                return (
                  <CalendarBodyItem key={itemDay.day} itemDay={itemDay} onClick = { onClick } onMouseOver = { onMouseOver } onMouseOut = { onMouseOut } />
                )
              }) }
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarBody;