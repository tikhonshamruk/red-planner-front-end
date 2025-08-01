import { axiosWithAuth } from "@/api/interceptors"
import { AuthResponse, ProfileDto, UpdateUserDto } from "@/types/auth.types"

export const userService = {
    async getProfile(){
        const response = await axiosWithAuth.get<ProfileDto>('/user/profile',)

        return response
    },

     async update(data: UpdateUserDto){
        const response = await axiosWithAuth.put<AuthResponse>('/user/profile',data)

        return response
    },
}