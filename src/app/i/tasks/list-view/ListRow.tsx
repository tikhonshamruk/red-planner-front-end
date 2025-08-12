import { TasksDto } from "../../../../types/tasks.types";

interface ListRowProps {
    item: TasksDto;
}

//Компонент, который отобржает строку задач в списке с возможность редоктриования
// отметки выполнения, изменения приоритета и удаления
export function ListRow({ item }: ListRowProps) {
    return <div className="text-white">ListRow - {item.name}</div>;
}