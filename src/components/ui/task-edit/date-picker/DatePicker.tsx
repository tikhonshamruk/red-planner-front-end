import {useState} from 'react'

import {DayPicker, SelectSingleEventHandler} from 'react-day-picker'
import "react-day-picker/style.css";

interface IDatePicker{
  onChange: (value:string) => void, //много вопрос к этой строчке 
  value: string
}

export function MyDatePicker({onChange,value}:IDatePicker) {
  const [selected, setSelected] = useState<Date>();

  const handleDaySelect: SelectSingleEventHandler = date => {
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
      fromYear={2023}
						toYear={2054}
						mode='single'
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
    />
  );
}