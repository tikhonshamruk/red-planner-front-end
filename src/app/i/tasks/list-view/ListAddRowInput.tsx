import { useCreateTask } from '../hooks/useCreateTask'

interface IListAddRowInput {
	filterDate: string
}

export function ListAddRowInput({ filterDate }: IListAddRowInput) {
	const { createTaskmutate } = useCreateTask()
	const addRow = () => {
		createTaskmutate({
			data: {
			name: 'Новая задача',
			isComleted: false,
			createdAt: filterDate}
		})
	}

	return (
		<div>
			<button onClick={addRow}>Add task...</button>
		</div>
	)
}
