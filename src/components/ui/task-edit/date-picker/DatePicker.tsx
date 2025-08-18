import dayjs from 'dayjs'
import { useState } from 'react'
import { DayPicker, OnSelectHandler } from 'react-day-picker'
import 'react-day-picker/style.css'

import { useOutside } from '@/hooks/useOutside'

interface IDatePicker {
	onChange: (value: string) => void //много вопрос к этой строчке
	value: string
}

export function DatePicker({ onChange, value }: IDatePicker) {
	const [selected, setSelected] = useState<Date>()

	const { isShow, setIsShow, ref } = useOutside(false)

	const handleDaySelect: OnSelectHandler<Date | undefined> = date => {
		const ISOdate = date?.toISOString()

		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
		} else {
			onChange('')
		}
	}

	return (
		<div
			className='relative'
			ref={ref}
		>
			<button onClick={() => setIsShow(!isShow)} className='bg-brandLinear'>
				{value ? dayjs(value).format('LL') : 'Click for select'}
			</button>
			{isShow && (
				<div className='absolute p-2.5 slide bg-sidebar'>
					<DayPicker
					mode='single'
					selected={selected}
					onSelect={handleDaySelect}
					weekStartsOn={1}
				/>
				</div>
			)}
		</div>
	)
}
