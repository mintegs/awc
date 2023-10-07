'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, type ReactNode } from 'react'
import { MdClose } from 'react-icons/md'

interface Props {
  children: ReactNode
  close: Dispatch<SetStateAction<boolean>>
  show: boolean
  title: string
  size?: string
}

export default function Modal({ children, close, show, title }: Props) {
  return (
    <Transition
      show={show}
      as={Fragment}
    >
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => null}
        static
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-md bg-gray-700 p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='div'
                  className='flex justify-between items-center'
                >
                  <h3 className='text-lg font-medium leading-6 text-gray-200 text-right'>
                    {title}
                  </h3>
                  <div className='w-5 h-5 rounded-md cursor-pointer bg-red-500 group flex justify-center items-center'>
                    <MdClose
                      className='w-5 h-5 text-gray-700 items-center'
                      onClick={() => close(!show)}
                    />
                  </div>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
