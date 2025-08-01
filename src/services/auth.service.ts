import { axiosClassic } from '@/api/interceptors';
import { AuthDto, AuthResponse, BothRespones } from "@/types/auth.types"
import { saveTokenStorage } from "./auth-token.service"
export const authService = {
   
    async main(type: 'login'| 'register', data: AuthDto){
         console.log('im here')
        const response = await axiosClassic.post<BothRespones>(`/auth/${type}`,data)
        const accessToken = response.data.accessToken;

        if(accessToken){
            saveTokenStorage(accessToken)
        }

        return response.data
    }

}