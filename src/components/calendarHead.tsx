import React from 'react';
import { months }  from '../langs/month.js';
import { CalendarHeadProps } from '../types/CalendarTypes.js';

const CalendarHead = ({ options }: CalendarHeadProps) => {
  const {lang, year, month, visibleYear} = options;

  return (
    <div className = "calendar-head">
      { months[lang??"es"][month??0] } { visibleYear ? year : '' }
    </div>
  )
}

export default CalendarHead;