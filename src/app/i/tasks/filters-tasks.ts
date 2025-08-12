import { FILTERS } from './columns.data'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import { TasksDto } from '@/types/tasks.types'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const filterTasks = (tasks: TasksDto[] | undefined, value: string) => {
	switch (value) {
		case 'today':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSame(FILTERS.today, 'day') &&
					!task.isCompleted
			)
		case 'tommorow':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSame(FILTERS.tommorow, 'day') &&
					!task.isCompleted
			)
		case 'on-this-week':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSameOrBefore(
						FILTERS['on-this-week'],
						'day'
					) && !task.isCompleted
			)
		case 'on-next-week':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isAfter(FILTERS['on-this-week']) &&
					dayjs(item.createdAt).isSameOrBefore(FILTERS['on-next-week']) &&
					!item.isCompleted
			)

		case 'later':
			return tasks?.filter(
				item =>
					(dayjs(item.createdAt).isAfter(FILTERS['on-next-week']) ||
						!item.createdAt) &&
					!item.isCompleted
			)
		case 'completed':
			return tasks?.filter(item => item.isCompleted)
		default:
			return []
	}
}
