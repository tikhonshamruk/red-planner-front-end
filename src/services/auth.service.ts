import { axiosClassic } from '@/api/interceptors';
import { AuthDto, AuthResponse } from "@/types/auth.types"
import { saveTokenStorage } from "./auth-token.service"
export const authService = {
    async register(data: AuthDto){
        const response = await axiosClassic.post<AuthResponse>('/auth/register',data)
    }
}