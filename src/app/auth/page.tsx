'use client'
import SignInForm from '@/components/forms/signInForm'
import SignInWithSocials from '@/components/pages/auth/signInWithSocials'

export default function Auth() {
  // const { user, loading } = useAuth()

  // if (loading) {
  //   return <Loading />
  // }

  // if (user) {
  //   redirect('/')
  // }

  return (
    <div className='w-full h-screen items-start bg-slate-800'>
      <div className='grid grid-cols-12 gap-4 place-content-center justify-center relative right-0 top-[6.5rem] md:top-[25%]'>
        <div className='col-1 md:col-span-3'></div>
        <div className='col-span-10 md:col-span-6'>
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
        <div className='col-1 md:col-span-3'></div>
      </div>
      {/* <div className=' h-full flex flex-col col-span-1 p-5 md:py-20 justify-center'>
        
      </div> */}
    </div>
  )
}
