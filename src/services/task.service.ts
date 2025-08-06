import { axiosWithAuth } from "@/api/interceptors"
import { AuthResponse } from "@/types/auth.types"
import { TasksDto } from "@/types/tasks.types"



export const taskService = {
    async getTasks(){
        const response = await axiosWithAuth.get<TasksDto[]>('/user/task')

        return response
    },

}