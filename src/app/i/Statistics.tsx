'use client'
import { useProfile } from "@/hooks/useProfile"
import { Loader } from "lucide-react"

export function Statistics(){
    const {data, isLoading} = useProfile()

    return isLoading ? (<Loader/>) : (
        <div className="">
            {data?.data.statistics.length ? (<div>I</div>): (<div>Statistics not loaded!</div>)}
        </div>
    )
}