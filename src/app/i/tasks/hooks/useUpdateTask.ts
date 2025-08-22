import { taskService } from "@/services/task.service"
import { TasksDto, UpdateTaskDto } from "@/types/tasks.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useUpdateTask(){

    const queryClient = useQueryClient()
    
    const {mutate: mutateUpdateTask} = useMutation({
        mutationKey: ['update task'],
        mutationFn: ({id, data}:{id:string, data: UpdateTaskDto}) => taskService.updateTask(id,data),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })
    return {mutateUpdateTask}
}