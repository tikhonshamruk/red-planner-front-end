import { useProfile } from "@/hooks/useProfile";
import { UpdateUserDto } from "@/types/auth.types";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

export function useInitialData(reset: UseFormReset<UpdateUserDto>){
    const {data, isSuccess} = useProfile()

    useEffect(()=>{
        reset({
            email: data?.data.user.email,
            name: data?.data.user.name,
            breakInternal: data?.data.user.breakInterval,
            intervalsCount: data?.data.user.intervalsCount,
            workInternal: data?.data.user.workInternal
        })
    },[isSuccess])

}