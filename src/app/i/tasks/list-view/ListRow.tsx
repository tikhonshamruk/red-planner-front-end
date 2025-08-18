import { Controller, useForm } from "react-hook-form";
import { TasksDto } from "../../../../types/tasks.types";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";
import { SingleSelect } from "@/components/ui/SingleSelect";

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
            <div>
                <Controller
                control={control}
                name="priority"
                render={({field: {value, onChange}})=>(
                    <SingleSelect
                   data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value}
                )}
                />
            </div>
    </div>);
}