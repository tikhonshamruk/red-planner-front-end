import {DropResult} from '@hello-pangea/dnd'
import { useUpdateTask } from './useUpdateTask'
import { FILTERS } from '../columns.data'
export function useTaskDnd(){

    const {mutate} = useUpdateTask()

    const onDragEnd = (result: DropResult) =>{
        if(!result.destination) return 

        const destinationColumnID = result.destination.droppableId

        if(destinationColumnID === result.source.droppableId) return 

        if(destinationColumnID === 'completed'){
            mutate({
                id: result.draggableId,
                data: {
                    id: result.draggableId,
                    isComleted:true
                }
            })
        }

        const newCreatedAt = FILTERS[destinationColumnID].format()

		mutate({
			id: result.draggableId,
			data: {
                id: result.draggableId,
				createdAt: newCreatedAt,
				isComleted: false
			}
		})
	
    }
    return {onDragEnd}
}