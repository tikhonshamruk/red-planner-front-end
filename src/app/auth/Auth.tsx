'use client'

import { AuthDto } from "@/types/auth.types"
import { useForm } from "react-hook-form"

export function Auth(){
    const {register, handleSubmit} = useForm()

    const OnSubmit = (data:any) => console.log(data)
    
    return (<div className="bg-blue-500">
        <form onSubmit={handleSubmit(OnSubmit)} >
            <input type="text" {...register('name',{required: "Name issss required!"})}/>
            <input />
            <button type="submit">Run</button>
        </form>
    </div>)
} 