'use client'
import CreateCategoryForm from '@/components/forms/createCategoryForm'
import Modal from '@/components/shared/modal'
import { useState } from 'react'

export default function AddCategory() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        className='h-10 w-full bg-blue-600 flex justify-center items-center font-medium text-base rounded-md group text-white border-2 border-blue-600 hover:bg-slate-700 hover:text-blue-400 hover:border-blue-500 transition duration-200 shadow-lg'
        onClick={() => setShowModal(!showModal)}
      >
        ثبت دسته بندی جدید
      </button>
      {showModal ? (
        <Modal
          show={showModal}
          close={setShowModal}
          title='ایجاد دسته جدید'
        >
          <CreateCategoryForm closeModal={setShowModal} />
        </Modal>
      ) : null}
    </>
  )
}
