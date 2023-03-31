import React, { useEffect, useState } from 'react';
import CalendarHead from './components/calendarHead.js';
import CalendarDay from './components/calendarDayWeek.js';
import CalendarBody from './components/calendarBody.js';
import { CalendarOptions, CalendarProps } from './types/CalendarTypes.js';

const EventsCalendar = ({
  lang,
  year,
  month,
  visibleYear,
  startDayWeek,
  holidays,
  events,
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
    startDayWeek: startDayWeek ?? 'MON',
    holidays,
    events
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
    <div id='events-calendar' style={style}>
          <CalendarHead options={options} handlers={{backMonth, backYear, nextMonth, nextYear}} />
          <CalendarDay startDayWeek={startDayWeek} lang={options.lang ?? 'es'} />
          <CalendarBody onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} options={options} />
    </div>
  )
}

export default EventsCalendar;