import { userService } from "@/services/user.service";
import { UpdateUserDto } from "@/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateSettings(){

    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationKey: ['update profile'], 
        mutationFn: (data: UpdateUserDto) => userService.update(data),
        onSuccess(){
            queryClient.invalidateQueries({queryKey: ['profile']})
        }
    })

    return {mutate,isPending}
}