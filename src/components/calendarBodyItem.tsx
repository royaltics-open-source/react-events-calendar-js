import React, { useRef } from 'react';
import { CalendarBodyItemProps } from '../types/CalendarTypes';

const CalendarBodyItem = ({ itemDay, onClick, onMouseOver, onMouseOut }: CalendarBodyItemProps) => {
	let selfRef = useRef<any>(null);

	return (
		<div style={{ width: '14.28571428571429%' }} className={itemDay.color}
			onClick={() => onClick ? onClick(itemDay.time, selfRef) : null}
			onMouseOver={() => onMouseOver ? onMouseOver(itemDay.time, selfRef) : null}
			onMouseOut={() => onMouseOut ? onMouseOut(itemDay.time, selfRef) : null}
			ref={selfRef}>
			<div className='calendar-body-day'>
				{itemDay.day}
			</div>
			{itemDay.events.length
				? itemDay.events.map((event, count) => {
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