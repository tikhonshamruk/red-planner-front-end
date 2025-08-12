import { TasksDto } from "@/types/tasks.types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { filterTasks } from "../filters-tasks";
import { ListRow } from "./ListRow";

interface IListRowParent {
    value: string,
    label: string, 
    items: TasksDto[] | undefined
}

export function ListRowParent({value, items, label} : IListRowParent) {
  return (
    <Droppable droppableId={value}>
       {provided =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {
            filterTasks(items, value)?.map((item,index)=>(
              <Draggable
              draggableId={item.id}
              index={index}
              key={item.id}
              >
                {provide =>(
                  <div ref={provide.innerRef} {...provide.draggableProps} {...provide.dragHandleProps}>
                    <ListRow item={item}/>
                  </div>
                )}
              </Draggable>
            ))
          }
          {provided.placeholder}
        </div>
       )}
    </Droppable>
  )
}