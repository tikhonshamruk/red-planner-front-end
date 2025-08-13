import { Controller, useForm } from "react-hook-form";
import { TasksDto } from "../../../../types/tasks.types";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";

interface IListRow {
    item: TasksDto;
}

export function ListRow({ item }: IListRow) {

    const {register, control, watch} = useForm({
        defaultValues:{
            name: item.name, 
            isComleted: item.isComleted,
            createdAt: item.createdAt,
            priority: item.priority
        }
    })
    return (<div className="text-white/30 flex flex-row">
        div
        	<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={''}
						/>
					)}
				/>
			</div>
    </div>);
}