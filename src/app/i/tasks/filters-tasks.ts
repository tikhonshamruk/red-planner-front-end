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
					dayjs(task.createdAt).isSame(FILTERS.today, 'day') && !task.isComleted
			)
		case 'tomorrow':
			return tasks?.filter(
				task =>
					dayjs(task.createdAt).isSame(FILTERS.tomorrow, 'day') &&
					!task.isComleted
			)
		case 'on-this-week':
			return tasks?.filter(
				task =>dayjs(task.createdAt).isAfter(FILTERS.today, 'day') &&
				dayjs(task.createdAt).isAfter(FILTERS.tomorrow, 'day') &&
					dayjs(task.createdAt).isSameOrBefore(
						FILTERS['on-this-week'],
						'day'
					) && !task.isComleted
			)
		case 'on-next-week':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isAfter(FILTERS['on-this-week']) &&
					dayjs(item.createdAt).isSameOrBefore(FILTERS['on-next-week']) &&
					!item.isComleted
			)

		case 'later':
			return tasks?.filter(
				item =>
					(dayjs(item.createdAt).isAfter(FILTERS['on-next-week']) ||
						!item.createdAt) &&
					!item.isComleted
			)
		case 'completed':
			return tasks?.filter(item => item.isComleted)
		default:
			return []
	}
}
