'use client'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export default function Header({
  sidebarStatus,
  setSidebarStatus,
}: {
  sidebarStatus: boolean
  setSidebarStatus: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={`${sidebarStatus ? '' : 'shadow-md'} z-10 py-4 bg-slate-800`}
    >
      <div className='container flex items-center justify-between h-full px-6 mx-auto'>
        <button
          className='p-1 rounded-md'
          onClick={() => setSidebarStatus(!sidebarStatus)}
        >
          <span
            className={`${
              sidebarStatus ? 'transform rotate-45 top-[7px]' : ''
            } relative w-[30px] h-[2px] my-[6px] block bg-black dark:bg-white`}
          ></span>
          <span
            className={`${
              sidebarStatus ? 'opacity-0' : ''
            } relative w-[30px] h-[2px] my-[6px] block bg-black dark:bg-white`}
          ></span>
          <span
            className={`${
              sidebarStatus ? 'top-[-8px] -rotate-45' : ''
            } relative w-[30px] h-[2px] my-[6px] block bg-black dark:bg-white`}
          ></span>
        </button>
        <div className='flex flex-1 capitalize'>
          <div className='mr-3 md:mr-6 relative w-full max-w-xl text-sm md:text-lg font-bold'>
            <Link
              href='/dashboard'
              className='text-gray-700 dark:text-gray-300'
            >
              <span className='hover:text-blue-700 dark:hover:text-blue-500'>
                پنل مدیریت
              </span>
            </Link>
          </div>
        </div>
        <ul className='flex items-center flex-shrink-0'>
          {/* <Theme /> */}
          {/* <Language /> */}
          {/* <UserMenu /> */}
        </ul>
      </div>
    </div>
  )
}
