import { useState } from 'react'
import {
	DayPicker,
	OnSelectHandler
} from 'react-day-picker'
import 'react-day-picker/style.css'

interface IDatePicker {
	onChange: (value: string) => void //много вопрос к этой строчке
	value: string
}

export function DatePicker({ onChange, value }: IDatePicker) {
	const [selected, setSelected] = useState<Date>()

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
		<DayPicker
			mode='single'
			selected={selected}
			onSelect={handleDaySelect}
		/>
	)
}
