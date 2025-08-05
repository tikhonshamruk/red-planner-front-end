'use client'
import { UpdateUserDto } from "@/types/auth.types"
import { SubmitHandler, useForm } from "react-hook-form"
import { useInitialData } from "./useInitialData"
import { Heading } from "@/components/ui/Heading/Heading"
import InputField from "@/components/ui/field/Field"
import { Button } from "@/components/ui/buttons/Button"
import { useUpdateSettings } from "./useUpdateSettings"

export function Settings() {

  const {register, handleSubmit, reset} =useForm<UpdateUserDto>({
    mode:'onChange'
  })

  const {mutate,isPending} = useUpdateSettings()

  useInitialData(reset)

  const onSubmit:SubmitHandler<UpdateUserDto> = data =>{
    console.log('Данные формы', data)
    mutate(data)
  }

  return (<div>
    <form
            className=' text-white bg-sidebar rounded-xl p-layout '
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-3">
               <div className="flex flex-col gap-4">
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

            <InputField
              id='password'
              label='Password:'
              placeholder='Enter password:'
              {...register('password', {
                required: 'password is required'
              })}
            />

            </div>

            <div className="flex flex-col gap-4">
               <InputField
              id='workInterval'
              label='workInterval:'
              placeholder='Enter workInterval:'
              {...register('workInterval', {
                required: 'workInterval is required',
                valueAsNumber:true
              })}
            />
    
            <InputField
              id='breakInterval'
              label='breakInterval:'
              placeholder='Enter breakInterval:'
              {...register('breakInterval', {
                required: 'breakInterval is required',
                valueAsNumber:true
              })}
            />

            <InputField
              id='intervalsCount'
              label='intervalsCount:'
              placeholder='Enter intervalsCount:'
              {...register('intervalsCount', {
                required: 'intervalsCount is required',
                valueAsNumber:true
              })}
            />

            </div>
            </div>
           
           
            <div className='mt-4 text-center'>
              <Button disabled={isPending}
              type="submit"
                className='text-sm text-blue-400 hover:underline'
              >
                Update
              </Button>
            </div>

          </form>
    
           
  </div>)
}