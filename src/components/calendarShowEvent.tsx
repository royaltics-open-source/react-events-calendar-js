import React from 'react';
import { CalendarShowEventProps } from '../types/CalendarTypes';

const CalendarShowEvent = ({ seletedEvent }: CalendarShowEventProps) => {

  

  return (
    <div className='evtcalBody'>
      {seletedEvent.title}
    </div>
 
  )
}

export default CalendarShowEvent;