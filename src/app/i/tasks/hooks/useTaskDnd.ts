import {DropResult} from '@hello-pangea/dnd'
import { useUpdateTask } from './useUpdateTask'
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

        
    }
    return {onDragEnd}
}