import { DragDropContext } from "@hello-pangea/dnd";
import { useTasks } from "../hooks/useTasks";
import { useTaskDnd } from "../hooks/useTaskDnd";
import { COLUMNS } from "../columns.data";
import { ListRowParent } from "./ListRowParent";

export function ListView() {

  const {items, setItems} = useTasks()
 
  const {onDragEnd} = useTaskDnd()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {
          COLUMNS.map(columns =>(
            <ListRowParent
            items={items}
            label = {columns.label}
            value = {columns.value}
            />
          )
          )
        }
      </div>
    </DragDropContext>
  )

}