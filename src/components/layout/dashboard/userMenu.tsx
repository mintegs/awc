'use client'
import useAuth from '@/components/hooks/queries/auth'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { LuLogOut } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa'

export default function UserMenu() {
  const { user } = useAuth()

  return (
    <div className='text-right ml-4 md:ml-0'>
      <Menu
        as='div'
        className='relative inline-block text-left'
      >
        <div>
          <Menu.Button
            title={
              !user?.name || user?.name === '' ? user?.username : user?.name
            }
            className='inline-flex w-full justify-center rounded-md bg-blue-600 text-white p-2 md:px-4 md:py-2 text-sm font-medium hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            <span className='hidden md:block'>
              {!user?.name || user?.name === '' ? user?.username : user?.name}
            </span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='-top-2 md:top-1 transform -translate-y-full md:translate-y-1/2 absolute left-0 origin-top-right lg:origin-top-left mb-2 w-56 divide-y divide-gray-100 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-blue-400'>
            <div className='p-4'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/settings/profile'
                    className={`${
                      active ? 'bg-slate-600 text-slate-200' : 'text-white'
                    } font-semibold flex w-full items-center rounded-md px-2 py-2 mb-2 last:mb-0 text-base`}
                  >
                    <FaRegUser className='h-5 w-5 ml-3' />
                    پروفایل
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`${process.env.NEXT_PUBLIC_AUTH_SERVICE}/user/sign-out`}
                    className={`${
                      active ? 'bg-slate-600 text-slate-200' : 'text-white'
                    } font-semibold flex w-full items-center rounded-md px-2 py-2 mb-2 last:mb-0 text-base`}
                  >
                    <LuLogOut className='h-5 w-5 ml-3' />
                    خروج
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
