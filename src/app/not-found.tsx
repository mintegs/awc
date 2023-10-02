import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-blue-400'>
      <div className='mx-6 px-6 py-10 md:px-40 md:py-20 bg-slate-800 rounded-md shadow-xl'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-blue-600 text-9xl'>۴۰۴</h1>

          <h6 className='mb-2 text-2xl font-bold text-center text-gray-300 md:text-3xl'>
            <span className='text-red-500'> اووووووو! </span>
            صفحه‌ای یافت نشد
          </h6>

          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا بعدا پاک شده است
          </p>

          <Link
            href='/'
            className='px-6 py-2 text-sm font-semibold rounded-md text-blue-800 bg-blue-100 hover:text-blue-100 hover:bg-blue-800 duration-300 ease-in-out'
          >
            بازگشت
          </Link>
        </div>
      </div>
    </div>
  )
}
