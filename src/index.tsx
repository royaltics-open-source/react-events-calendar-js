import React, { useState } from 'react';
import CalendarHead from './components/calendarHead.js';
import CalendarDay from './components/calendarDayWeek.js';
import CalendarBody from './components/calendarBody.js';
import { CalendarOptions, CalendarProps, EventCalendarType } from './types/CalendarTypes.js';
import CalendarShowEvent from './components/calendarShowEvent.js';

//Month Is [0,11]
const EventsCalendar = ({ lang, year, monthIndex, visibleYear, startDayWeek, holidays, events, style, onClickDay, onClickEvent }: CalendarProps): React.ReactComponentElement<any, CalendarProps> => {

  const [options, setOptions] = useState<CalendarOptions>({
    year: year ?? new Date().getFullYear(),
    monthIndex: monthIndex ? monthIndex : new Date().getMonth(),
    lang: lang ?? 'es',
    visibleYear,
    startDayWeek: startDayWeek ?? 'MON',
  });
  const [seletedEvent, setSeletedEvent] = useState<EventCalendarType>()


  return (
    <div id='events-calendar' style={style}>
      {seletedEvent && <CalendarShowEvent seletedEvent={seletedEvent} />}
      <CalendarHead options={options} setOptions={setOptions} />
      <CalendarDay startDayWeek={startDayWeek ?? 'MON'} lang={options.lang ?? 'es'} />
      <CalendarBody onClickDay={onClickDay} onClickEvent={onClickEvent} setSeletedEvent={setSeletedEvent}
        options={options}
        holidays={holidays}
        events={events}
      />
    </div>
  )
}

export default EventsCalendar;