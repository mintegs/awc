'use client'
import toast from 'react-hot-toast'
import { MdClose } from 'react-icons/md'

export default function customToaster(
  message: string,
  className?: string,
  close: boolean = false
) {
  return toast.custom(
    (t) => (
      <div
        style={{
          opacity: t.visible ? 1 : 0,
        }}
        className={`${
          className ? className : 'bg-slate-700'
        } px-3 py-2 text-base text-gray-300 rounded-md flex items-center ease-in-out duration-100 shadow-2xl shadow-slate-900/50`}
      >
        <span>{message}</span>
        {close ? (
          <button
            className='mr-3 bg-slate-600 hover:bg-slate-800 rounded-md p-1'
            onClick={() => toast.dismiss(t.id)}
          >
            <MdClose className='h-5 w-5' />
          </button>
        ) : (
          <></>
        )}
      </div>
    ),
    {
      duration: close ? 3000 : 6000,
    }
  )
}
