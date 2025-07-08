import { config } from 'process';
import { getAccessToken } from "@/services/auth-token.service";
import axios, { CreateAxiosDefaults } from "axios";
import { error } from 'console';

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
    // config => config,
    // async error=>{
    //     const originalRequest = error.config}
        
    // if(error?.response?.status === 401 || errorCatch(error)==='jwt expired')
    
)