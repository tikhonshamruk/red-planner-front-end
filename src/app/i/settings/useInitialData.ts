import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { UpdateUserDto } from '@/types/auth.types'

import { useProfile } from '@/hooks/useProfile'

export function useInitialData(reset: UseFormReset<UpdateUserDto>) {
	const { data, isSuccess } = useProfile()

	useEffect(() => {
		reset({
			email: data?.data.user.email,
			name: data?.data.user.name,
			workInterval: data?.data.user.workInterval,
			breakInterval: data?.data.user.breakInterval,
			intervalsCount: data?.data.user.intervalsCount
		})
	}, [isSuccess])
}
