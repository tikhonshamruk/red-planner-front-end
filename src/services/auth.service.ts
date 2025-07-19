import { saveTokenStorage } from "./auth-token.service"
import {IAuthResponse} from '@/types/auth.types'
import {axiosClassic} from '@/api/interceptors'
export const authService = {
    async main(){

    },

    async getNewToken(){
        const response = await axiosClassic.post<IAuthResponse>('/auth/login/access-token')
        if(response.data.accessToken) saveTokenStorage(response.data.accessToken)
            return response
    }
}