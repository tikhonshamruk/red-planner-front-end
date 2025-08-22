import { TaskDto } from './../../../red-planner-back-end/src/task/task.dto';
import { axiosWithAuth } from "@/api/interceptors"
import { AuthResponse } from "@/types/auth.types"
import { CreateTaskDto, TasksDto, UpdateTaskDto } from "@/types/tasks.types"



export const taskService = {
    async getTasks(){
        const response = await axiosWithAuth.get<TasksDto[]>('/user/task')

        return response
    },

    async updateTask(id: string, data: UpdateTaskDto){
        const response = await axiosWithAuth.put<TaskDto>(`/user/task/${id}`,data)

        return response
    },

    async createTask(data:CreateTaskDto){
        const response = await axiosWithAuth.post<TaskDto>('/user/task', data)
    }
}