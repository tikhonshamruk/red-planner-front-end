import { axiosWithAuth } from "@/api/interceptors"
import { AuthResponse, UpdateUserDto } from "@/types/auth.types"

export const userService = {
    async getProfile(){
        const response = await axiosWithAuth.get('/user/profile',)

        return response
    },

     async update(data: UpdateUserDto){
        const response = await axiosWithAuth.put<AuthResponse>('/user/profile',data)

        return response
    },
}