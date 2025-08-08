import { Droppable } from "@hello-pangea/dnd";

export function ListRowParent() {
  return (
    <Droppable>
       {provided =>(
        <div ref={provided.innerRef} {...provided.droppableProps}>
        </div>
       )}
    </Droppable>
  )
}