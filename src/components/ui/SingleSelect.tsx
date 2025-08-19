import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

export interface IOption {
	label: string
	value: string
}

interface IDateSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string | undefined
}

export function SingleSelect({ data, onChange, value }: IDateSelect) {
	return (
		<div>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Age</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={value}
					label='Priority'
					onChange={e => onChange(e.target.value as string)}
				>
					{data.map(item => (
						<MenuItem value={item.value}>{item.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}
