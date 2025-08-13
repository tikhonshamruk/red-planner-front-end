import { useForm } from "react-hook-form";
import { TasksDto } from "../../../../types/tasks.types";

interface IListRow {
    item: TasksDto;
}

export function ListRow({ item }: IListRow) {

    const {register, control, watch} = useForm({
        defaultValues:{
            name: item.name, 
            isCompleted: item.isCompleted,
            createdAt: item.createdAt,
            priority: item.priority
        }
    })
    return (<div>
        <div></div>
    </div>);
}