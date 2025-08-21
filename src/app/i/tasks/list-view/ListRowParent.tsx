import { FILTERS } from '../columns.data'
import { filterTasks } from '../filters-tasks'
import { ListAddRowInput } from './ListAddRowInput'
import { ListRow } from './ListRow'
import { Draggable, Droppable } from '@hello-pangea/dnd'

import { TasksDto } from '@/types/tasks.types'

interface IListRowParent {
	value: string //сама калонка(Today)
	label: string //название калонки(today)
	items: TasksDto[] | undefined //tasks
}

export function ListRowParent({ value, items, label }: IListRowParent) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
					className='mb-7 flex flex-row justify-between'
				>
					<div className='text-red-500'>{label}</div>
					{filterTasks(items, value)?.map((item, index) => (
						<Draggable
							draggableId={item.id}
							index={index}
							key={item.id}
						>
							{provided => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									<ListRow item={item} />
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
					{value !== 'completed' && (
						<ListAddRowInput filterDate={FILTERS[value].format()} />
					)}
				</div>
			)}
		</Droppable>
	)
}
