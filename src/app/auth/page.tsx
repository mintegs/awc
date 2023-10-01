import SignInForm from '@/components/forms/signInForm'
import SignInWithSocials from '@/components/pages/auth/signInWithSocials'
import Image from 'next/image'

const fetchUser = async () => {
  const res = await fetch('https://api.mintegs.com/user', {
    credentials: 'include',
    next: {
      revalidate: 30,
    },
  })

  if (res.ok) {
    const data = await res.json()
    return data
  }

  return null
}

export default async function Auth() {
  const user = await fetchUser()
  console.log('user', user)

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/6 md:w-1/2 h-full flex flex-col'>
        {/* <Image
          src='/auth-cover.jpeg'
          alt='auth-background'
          className='w-full h-full object-cover'
          fill
          placeholder='blur'
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU07R+AAACUwFkQasmgQAAAABJRU5ErkJggg=='
          loading='lazy'
        /> */}
      </div>
      <div className='w-full h-full bg-slate-800 flex flex-col p-5 md:py-20 md:px-56 justify-center'>
        <h1 className='text-xl font-bold text-gray-300 border-b-4 border-gray-300 w-48'>
          ورود به مینتگس
        </h1>
        <div className='w-full flex flex-col mt-10'>
          <SignInForm />
          <div className='h-1 bg-gray-200 rounded-full mt-5 items-center text-center'>
            <span className='relative bottom-[0.7rem] right-0 bg-slate-800 px-5 font-medium text-gray-300'>
              ورود از طریق شبکه‌های اجتماعی
            </span>
            <SignInWithSocials />
            <p className='bg-white text-gray-800 p-5'>{JSON.stringify(user)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
