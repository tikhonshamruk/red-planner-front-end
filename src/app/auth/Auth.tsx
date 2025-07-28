'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import InputField from '@/components/ui/field/Field'

import { AuthDto } from '@/types/auth.types'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<AuthDto>()

	const onSubmit: SubmitHandler<AuthDto> = data => console.log(data)

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: AuthDto) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			console.log('Ура все круто!')
		}
	})

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
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
				/>

				<InputField
					id='password'
					label='password:'
					placeholder='Enter password:'
					type='password'
					{...register('password', {
						required: 'Password is required1'
					})}
				/>
				<Button onClick={() => setIsLoginForm(true)}>Login</Button>
				<Button onClick={() => setIsLoginForm(false)}>Register</Button>
			</form>
		</div>
	)
}
