import React, { useRef } from 'react';
import { CalendarBodyItemProps } from '../types/CalendarTypes';

const CalendarBodyItem = ({ dayOfWeek, onClick, onMouseOver, onMouseOut }: CalendarBodyItemProps) => {
	let selfRef = useRef<any>(null);

	return (
		<div style={{ width: '14.28571428571429%' }} className={dayOfWeek.color}
			onClick={() => onClick ? onClick(dayOfWeek.time, selfRef) : null}
			onMouseOver={() => onMouseOver ? onMouseOver(dayOfWeek.time, selfRef) : null}
			onMouseOut={() => onMouseOut ? onMouseOut(dayOfWeek.time, selfRef) : null}
			ref={selfRef}>
			<div className='calendar-body-day'>
				{dayOfWeek.day}
			</div>
			{dayOfWeek.events.length
				? dayOfWeek.events.map((event, count) => {
					return (
						<div className={'calendar-body-hint ' + event.color } key={count}>
							<div className='calendar-body-title'>
								{event.title}
							</div>
							<div className='calendar-body-desc'>
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