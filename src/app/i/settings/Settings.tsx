'use client'
import { UpdateUserDto } from "@/types/auth.types"
import { SubmitHandler, useForm } from "react-hook-form"
import { useInitialData } from "./useInitialData"
import { Heading } from "@/components/ui/Heading/Heading"
import InputField from "@/components/ui/field/Field"
import { Button } from "@/components/ui/buttons/Button"

export function Settings() {

  const {register, handleSubmit, reset} =useForm<UpdateUserDto>({
    mode:'onChange'
  })

  useInitialData(reset)

  const onSubmit:SubmitHandler<UpdateUserDto> = data =>{
    console.log('Данные формы', data)
  }

  return (<div>
    <form
            className='w-1/4 m-auto text-white bg-sidebar rounded-xl p-layout'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Heading title="Settings"></Heading>
    
            <InputField
              id='email'
              label='Email:'
              placeholder='Enter email:'
              {...register('email', {
                required: 'Email is required'
              })}
            />
    
            <InputField
              id='name'
              label='Name:'
              placeholder='Enter name:'
              {...register('name', {
                required: 'name is required'
              })}
            />
            
          </form>
    
           <div className='mt-4 text-center'>
              <Button 
                className='text-sm text-blue-400 hover:underline'
              >
                Update
              </Button>
            </div>
  </div>)
}