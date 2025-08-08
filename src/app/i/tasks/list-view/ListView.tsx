import { DragDropContext } from "@hello-pangea/dnd";
import { useTasks } from "../hooks/useTasks";
import { useTaskDnd } from "../hooks/useTaskDnd";
import { COLUMNS } from "../columns.data";

export function ListView() {
 
  const {onDragEnd} = useTaskDnd()
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {
          COLUMNS.map(columns =>(
            <ListRowParent/>
          )
          )
        }
      </div>
    </DragDropContext>
  )

}