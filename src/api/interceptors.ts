import { getAccessToken, removeToken } from "@/services/auth-token.service";
import axios, { CreateAxiosDefaults } from "axios";
import { authService } from '@/services/auth.service';



const options:CreateAxiosDefaults={
    baseURL: 'http://localhost:4200/api',
    headers:{
        "Content-Type": "application/json"
    },
    withCredentials: true
} 

const axiosWithAuth = axios.create(options )

axiosWithAuth.interceptors.request.use(config=>{
    const accessToken = getAccessToken()

    if(config?.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config 
})
axiosWithAuth.interceptors.response.use(
    response => response, // Directly return successful responses.
    async error=>{
        const originalRequest = error.config

        if((error?.response?.status === 401 || 
            error.response?.data?.message === 'jwt expired' || 
            error.message === 'jwt must be provided')
             && originalRequest && !originalRequest._isRetry
        ){
            originalRequest._isRetry = true
            try{
                await authService.getNewToken()
                return axiosWithAuth.request(originalRequest)
            }
            catch(error){
                    removeToken()
                    return Promise.reject(error);
            }
        }
        return Promise.reject(error)
    }
    
)

export { axiosWithAuth}