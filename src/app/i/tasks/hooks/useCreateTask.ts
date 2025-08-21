import { useMutation, useQueryClient } from "@tanstack/react-query";

import { taskService } from "@/services/task.service";
import { CreateTaskDto} from "@/types/tasks.types";

export function useCreateTask(){
    const queryClient = useQueryClient()

    const {mutate: createTaskmutate} = useMutation({
        mutationKey: ['create task'],
        mutationFn: ({data}:{data:CreateTaskDto})=>taskService.createTask(data),
        onSuccess(){
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return {createTaskmutate}
}