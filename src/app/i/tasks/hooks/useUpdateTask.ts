import { taskService } from "@/services/task.service"
import { TasksDto } from "@/types/tasks.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUpdateTask(){

    const queryClient = useQueryClient()
    
    const {mutate} = useMutation({
        mutationKey: ['update task'],
        mutationFn: ({id, data}:{id:string, data: TasksDto}) => taskService.updateTask(id,data),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })
    return {mutate}
}