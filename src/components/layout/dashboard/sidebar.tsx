'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { FaTableList } from 'react-icons/fa6'
import { RiDashboardFill } from 'react-icons/ri'

const routes = [
  {
    name: 'داشبورد',
    url: '/dashboard',
    icon: <RiDashboardFill className='h-6 w-6' />,
  },
  {
    name: 'دسته بندی‌ها',
    url: '/dashboard/categories',
    icon: <FaTableList className='h-6 w-6' />,
  },
  // {
  //   name: 'discusses',
  //   url: '/user/discusses',
  //   icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
  // },
  // {
  //   name: 'account_information',
  //   url: '/user/account',
  //   icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
  // },
  // {
  //   name: 'security_and_privacy',
  //   url: '/user/security',
  //   icon: <ShieldCheckIcon className="h-6 w-6" />,
  // },
]

export default function Sidebar({
  sidebarStatus,
  setSidebarStatus,
}: {
  sidebarStatus: boolean
  setSidebarStatus: Dispatch<SetStateAction<boolean>>
}) {
  const pathName = usePathname()

  return (
    <>
      <aside
        className={`${
          sidebarStatus ? '' : 'hidden'
        } fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-slate-800`}
      >
        <div className='pb-2'>
          <ul className='mt-2 text-gray-400'>
            {routes.map(({ name, url, icon }) => (
              <li
                key={name}
                className={`relative mx-2 mb-2 rounded-lg group ${
                  pathName == url
                    ? 'bg-blue-600'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <Link
                  href={url}
                  className={`inline-flex px-6 py-3 items-center text-center w-full text-base font-semibold transition-colors duration-150 ${
                    pathName == url
                      ? 'text-blue-100'
                      : 'group-hover:text-slate-300'
                  }`}
                >
                  {icon}
                  <span className='mr-4'>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div
        onClick={() => setSidebarStatus(!sidebarStatus)}
        className={`${
          sidebarStatus ? '' : 'hidden'
        } fixed inset-0 z-10 items-end bg-slate-700 backdrop-blur-sm bg-opacity-50 sm:items-center sm:justify-center cursor-pointer`}
      ></div>
    </>
  )
}
