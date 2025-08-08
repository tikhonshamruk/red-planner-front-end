import { TasksDto } from "@/types/tasks.types";
import { Droppable } from "@hello-pangea/dnd";

interface IListRowParent {
    value: string,
    label: string, 
    items: TasksDto[] | undefined
}

export function ListRowParent({value, items, label} : IListRowParent) {
  return (
    <Droppable droppableId="">
       {provided =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
        </div>
       )}
    </Droppable>
  )
}