import React, { useEffect, useState } from 'react';
import CalendarHead from './components/calendarHead.js';
import CalendarDay from './components/calendarDay.js';
import CalendarBody from './components/calendarBody.js';
import { CalendarOptions, CalendarProps } from './types/CalendarTypes.js';

const Calender = ({
  lang,
  year,
  month,
  visibleYear,
  startDayWeek,
  holiday,
  style,
  onClick,
  onMouseOver,
  onMouseOut,
}: CalendarProps): React.ReactComponentElement<any, CalendarProps> => {

  const [options, setOptions] = useState<CalendarOptions>({
    year: year ?? new Date().getFullYear(),
    month: month ?? new Date().getMonth(),
    lang: lang ?? 'es',
    visibleYear,
    startDayWeek,
    holiday,
  });

  useEffect(() => {
    setOptions((prev) => {
      return {
        ...prev,
        visibleYear: false,
      }
    })
  }, [])

  const backYear = () => {
    
  }

  const nextYear = () => {
    
  }

  const backMonth = () => {
    setOptions((prev) => {
      return {
        ...prev,
        month: prev.month > 0 ? prev.month - 1 : 0,
      }
    })

  }

const nextMonth = () => {
  setOptions((prev) => {
    return {
      ...prev,
      month: prev.month > 11 ? prev.month + 1 : 12,
    }
  })
}

return (
  <div className='exampleCalendar'>
    <button className='mdc-button' onClick={backMonth}>&gt;</button>
    <button className='mdc-button' onClick={backYear}>&lt;</button>
    <button className='mdc-button' >{options.month} / {options.year}</button>
    <button className='mdc-button' onClick={nextYear}>&lt;</button>
    <button className='mdc-button' onClick={nextMonth}>&lt;</button>
    <div className='exampleCalendar-wrap'>
      <div className={`calendar`} style={style}>
        <CalendarHead options={options} />
        <CalendarDay startDayWeek={startDayWeek} lang={options.lang??'es'} />
        <CalendarBody onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} options={options} />
      </div>
    </div>
  </div>
)
}

export default Calender;