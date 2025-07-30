'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import InputField from '@/components/ui/field/Field'

import { AuthDto } from '@/types/auth.types'
import { useRouter } from 'next/navigation'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export function Auth() {
	const { register, handleSubmit, reset, formState: {errors} } = useForm<AuthDto>()

	
	const [isLoginForm, setIsLoginForm] = useState(false)

	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: AuthDto) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			console.log('Ура все круто!')
			reset()
			router.push(DASHBOARD_PAGES.HOME)
		},
		onError(error){
			console.error('Произошла ошибка:', error)
		}
	})

	const onSubmit: SubmitHandler<AuthDto> = data => {
		console.log('Данные формы:', data);
		mutate(data);
	}

	return (
		<div className='flex min-h-screen '>
			<form
				className='w-1/4 m-auto text-white bg-sidebar rounded-xl p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div>
					<h1 className='text-3xl font-medium'>Auth</h1>
					<div className='my-3 h-0.5 bg-border w-full' />
				</div>

				<InputField
					id='email'
					label='Email:'
					placeholder='Enter email:'
					type='email'
					{...register('email', {
						required: 'Email is required'
					})}
					error= {errors.email?.message}
				/>

				<InputField
					id='password'
					label='Password:'
					placeholder='Enter password:'
					type='password'
					{...register('password', {
						required: 'Password is required'
					})}
				/>
				<div className='flex items-center gap-5 mt-4 justify-center'>
					<Button type='submit' onClick={() => setIsLoginForm(true)}>Login</Button>
				<Button type='submit' onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
				
			</form>
		</div>
	)
}
