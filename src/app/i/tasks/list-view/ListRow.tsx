import { Controller, useForm } from "react-hook-form";
import { TasksDto } from "../../../../types/tasks.types";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";
import { SingleSelect } from "@/components/ui/SingleSelect";
import { useEffect } from "react";

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

      useEffect(() => {
        const subscription = watch((value) => {
            console.log('Field changed:', value);
            // Можно обновлять состояние или выполнять другие действия
        });
        return () => subscription.unsubscribe();
    }, [watch]);
    // я не понимаю , почему мы здесь отписываемся? 

    return (<div className="text-white/30 flex flex-row">
        <div>
            {item.name}
        </div>
        	<div>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
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
							value={value || ''}
                            />
                )}
                />
            </div>
    </div>);
}