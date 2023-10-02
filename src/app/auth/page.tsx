'use client'
import SignInForm from '@/components/forms/signInForm'
import useAuth from '@/components/hooks/useAuth'
import SignInWithSocials from '@/components/pages/auth/signInWithSocials'
import Loading from '@/components/shared/loading'
import { redirect } from 'next/navigation'

export default function Auth() {
  const { user, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  if (user) {
    redirect('/')
  }

  return (
    <div className='w-full h-screen flex items-start bg-gradient-to-r from-sky-800 from-10% to-90% to-slate-800'>
      <div className='w-full h-full flex flex-col p-5 md:py-20 md:px-56 justify-center '>
        <div className='w-full flex flex-col mt-10 bg-slate-600 bg-opacity-50 rounded-md p-5 shadow-md'>
          <h1 className='text-xl font-bold text-center text-gray-300 mb-6'>
            ورود به مینتگس
          </h1>
          <SignInForm />
          <div className='border-t-4 border-gray-300 p-5 mt-5 items-center text-center'>
            <span className='relative bottom-[0.7rem] right-0 px-5 font-medium text-gray-300'>
              ورود از طریق شبکه‌های اجتماعی
            </span>
            <SignInWithSocials />
          </div>
        </div>
      </div>
    </div>
  )
}
