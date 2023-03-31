import React, { useRef } from 'react';
import { CalendarBodyItemProps } from '../types/CalendarTypes';
import { parseDate } from '../utils/Utils';

const CalendarBodyItem = ({ dayOfWeek, onClickDay, onClickEvent }: CalendarBodyItemProps) => {
	let selfRef = useRef<any>(null);
	let eventRef = useRef<any>(null);

	return (
		<div className={`day ${dayOfWeek.color ?? ''}`}
			onClick={() => onClickDay ? onClickDay(dayOfWeek.time, selfRef) : null}
			ref={selfRef}>

			<div className='evtcalDate'>
				{dayOfWeek.day}
			</div>

			{dayOfWeek.events.length ? dayOfWeek.events.map((event, count) => {
				return (
					<div className={'evtcalDateContainer ' + event.color} key={count}
						//onMouseOver={() => onMouseOverEvent ? onMouseOverEvent(event, eventRef) : null}
						//onMouseOut={() => onMouseOverEvent ? onMouseOverEvent(event, eventRef) : null}
						onClick={() => onClickEvent ? onClickEvent(event, eventRef) : null}
						ref={eventRef}
					>
						<div className='evtCalDateTitle'>
							<strong>{event.title}</strong>
							<span className='time'>{parseDate(event.date)}</span>
						</div>
						<div className='evtcalDateDesc'>
							{event.description}
						</div>
					</div>
				)
			})
			: null
			}
		</div>
	)
}

export default CalendarBodyItem;