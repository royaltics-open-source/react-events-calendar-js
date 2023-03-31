import React from 'react';
import { CalendarHeadProps } from '../types/CalendarTypes.js';
import { months } from '../langs/month.js';

const CalendarHead = ({ options, setOptions }: CalendarHeadProps) => {
  const { lang, year, month, visibleYear } = options;


  //Handlers Change Year and Month
  const backYear = () => {
    setOptions((prev) => {
      return {
        ...prev,
        year: prev.year - 1,
      }
    })
  }

  const nextYear = () => {
    setOptions((next) => {
      return {
        ...next,
        year: next.year + 1,
      }
    })
  }

  const backMonth = () => {
    setOptions((prev) => {
      const newMonth = prev.month == 0 ? 11 : prev.month - 1;
      return {
        ...prev,
        year: newMonth == 11 ? prev.year - 1 : prev.year,
        month: newMonth,
      }
    })

  }

  const nextMonth = () => {
    setOptions((next) => {
      const newMonth = next.month > 10 ? 0 : next.month + 1;
      return {
        ...next,
        year: newMonth == 0 ? next.year + 1 : next.year,
        month: newMonth,
      }
    })
  }

  return (
    <div className='evtcalHeader'>
      <button type='button' title='Mes Anterior' className='evtcalButton' onClick={backMonth}>&lt;</button>
      <button type='button' title='Año Anterior' className='evtcalButton' onClick={backYear}>&lt;&lt;</button>
      <button type='button' className='evtcalButton' >{months[lang ?? "es"][month ?? 0]} {visibleYear ? year : ''} del {options.year}</button>
      <button type='button' title='Siguiente Año' className='evtcalButton' onClick={nextYear}>&gt;&gt;</button>
      <button type='button' title='Siguiente Mes' className='evtcalButton' onClick={nextMonth}>&gt;</button>
    </div>
  )
}

export default CalendarHead;