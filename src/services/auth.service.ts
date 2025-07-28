import { axiosClassic } from '@/api/interceptors';
import { AuthDto, AuthResponse } from "@/types/auth.types"
import { saveTokenStorage } from "./auth-token.service"
export const authService = {
   
    async main(type: 'login'| 'register', data: AuthDto){
         console.log('im here')
        const response = await axiosClassic.post<AuthResponse>(`/auth/register/${type}`,data)

        return response
    }

}