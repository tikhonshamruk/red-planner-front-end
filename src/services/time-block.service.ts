import { axiosWithAuth } from "@/api/interceptors"
import { ArrayTimeBlocksDto, AuthResponse, UpdateUserDto } from "@/types/auth.types"

export const TimeBlockService = {
    async getTimeBlocks(data: AuthResponse){
        const response = await axiosWithAuth.get<ArrayTimeBlocksDto>('/user/time-block',)

        return response
    },

    //  async addTimeBlock(data: ){
    //     const response = await axiosWithAuth.post<>('/user/time-block',data)

    //     return response
    // },

    // async updateTimeBlock(data: ){
    //     const response = await axiosWithAuth.put<>('/user/time-block',data)

    //     return response
    // },

    // async deleteTimeBlock(){
    //     const response = await axiosWithAuth.delete<>('/user/time-block')
    // },
}