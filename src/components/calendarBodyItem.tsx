import React, { useRef } from 'react';
import { CalendarBodyItemProps } from '../types/CalendarTypes';

const CalendarBodyItem = ({ dayOfWeek, onClick, onMouseOver, onMouseOut }: CalendarBodyItemProps) => {
	let selfRef = useRef<any>(null);

	return (
		<div className={'day ' +dayOfWeek.color}
			onClick={() => onClick ? onClick(dayOfWeek.time, selfRef) : null}
			onMouseOver={() => onMouseOver ? onMouseOver(dayOfWeek.time, selfRef) : null}
			onMouseOut={() => onMouseOut ? onMouseOut(dayOfWeek.time, selfRef) : null}
			ref={selfRef}>
			<div className='evtcalDate'>
				{dayOfWeek.day}
			</div>
			{dayOfWeek.events.length
				? dayOfWeek.events.map((event, count) => {
					return (
						<div className={'evtcalDateContainer ' + event.color } key={count}>
							<div className='evtCalDateTitle'>
								{event.title}
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