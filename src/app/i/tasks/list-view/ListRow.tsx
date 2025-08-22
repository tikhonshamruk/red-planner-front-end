import { TasksDto, UpdateTaskDto } from '../../../../types/tasks.types'
import { useUpdateTask } from '../hooks/useUpdateTask'
import { debounce } from 'lodash'
import { useCallback, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { SingleSelect } from '@/components/ui/SingleSelect'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'

interface IListRow {
	item: TasksDto
}

export function ListRow({ item }: IListRow) {
	const { mutateUpdateTask } = useUpdateTask()

	const { register, control, watch } = useForm({
		defaultValues: {
			name: item.name,
			isComleted: item.isComleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	//Дебаунс для избежания множественных запросов
	const debouncedUpdate = useCallback(
		debounce((data: UpdateTaskDto) => {
			mutateUpdateTask({ id: item.id, data })
		}, 500),[]
	)

	useEffect(() => {
		const subscription = watch(value => {
			debouncedUpdate(value)
		})
		return () => {
			subscription.unsubscribe()
			debouncedUpdate.cancel() // Отменяем pending дебаунс при размонтировании
		}
	}, [watch, debouncedUpdate])
	// я не понимаю , почему мы здесь отписываемся?

	return (
		<div className='text-white/30 flex flex-row'>
			<div>{item.name}</div>
			<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
		</div>
	)
}
