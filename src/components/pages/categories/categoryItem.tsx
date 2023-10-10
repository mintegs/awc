import CategoryForm from '@/components/forms/categoryForm'
import Modal from '@/components/shared/modal'
import { useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function CategoryItem({ item }: { item: any }) {
  const [showEditModal, setShowEditModal] = useState(false)
  return (
    <tr className='border-b bg-slate-800 border-slate-700 hover:bg-slate-700 hover:bg-opacity-60'>
      <th
        scope='row'
        className='px-6 py-2 font-medium whitespace-nowrap'
      >
        {item.title}
      </th>
      <td className='px-6 py-2 hidden md:block'>{item.count}</td>
      <td className='text-center items-center'>
        <div className='flex justify-center items-center'>
          <button
            onClick={() => setShowEditModal(true)}
            className='rounded-full hover:bg-blue-200 text-blue-400 hover:text-blue-600 p-1'
          >
            <FiEdit2 size={20} />
          </button>
          {showEditModal ? (
            <Modal
              show={showEditModal}
              close={setShowEditModal}
              title='ویرایش دسته جدید'
            >
              <CategoryForm />
            </Modal>
          ) : null}
          <button
            onClick={() => console.log(item.title)}
            className='rounded-full hover:bg-red-200 text-red-400 hover:text-red-600 p-1'
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  )
}
