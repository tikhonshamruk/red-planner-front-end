'use client'

import { useForm } from 'react-hook-form'

import InputField from '@/components/ui/field/Field'

import { AuthDto } from '@/types/auth.types'

export function Auth() {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => console.log(data)

	return (
		<div className='bg-blue-500'>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<button type='submit'>Run</button>
			</form>
		</div>
	)
}
