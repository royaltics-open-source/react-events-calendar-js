import React from 'react';
import { CalendarHeadProps } from '../types/CalendarTypes.js';
import { months }  from '../langs/month.js';

const CalendarHead = ({ options, handlers }: CalendarHeadProps) => {
  const {lang, year, month, visibleYear} = options;
  const {backMonth, backYear, nextMonth, nextYear} = handlers;

  return (
    <div className='evtcalHeader'>
    <button type='button' className='evtcalButton' onClick={backMonth}>&lt;</button>
    <button type='button' className='evtcalButton' onClick={backYear}>&lt;&lt;</button>
    <button type='button' className='evtcalButton' >{options.month}        { months[lang??"es"][month??0] } { visibleYear ? year : '' } / {options.year}</button>
    <button type='button' className='evtcalButton' onClick={nextYear}>&gt;</button>
    <button type='button' className='evtcalButton' onClick={nextMonth}>&gt;&gt;</button>
  </div>
  )
}

export default CalendarHead;