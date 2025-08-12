import { TasksDto } from "../../../../types/tasks.types";

interface ListRowProps { //  Создаем интерфейс для пропсов
    item: TasksDto;
}
export function ListRow({ item }: ListRowProps) {
    return <div>ListRow - {item.name}</div>;
}