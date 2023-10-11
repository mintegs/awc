import EditCategoryForm from '@/components/forms/editCategoryForm'
import Modal from '@/components/shared/modal'
import customToaster from '@/components/shared/notify'
import fetcher from '@/lib/fetcher'
import { useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { mutate } from 'swr'

export default function CategoryItem({ item }: { item: any }) {
  const [showEditModal, setShowEditModal] = useState(false)

  async function deleteCategory(id: string) {
    try {
      mutate(
        'categories',
        async (categories: any) => {
          await fetcher().delete(`/admin/categories/${id}`)
          console.log('categories in mutate', categories)
          // const filterCategories = categories.data.categories.filter(
          //   (category: any) => category._id !== id
          // )
          return [...categories]
        },
        { revalidate: false }
      )

      // toaster
      customToaster('دسته باموفقیت حذف شد', 'bg-green-700', true)
    } catch (error: any) {
      // toaster
      customToaster(error.response.data.message, 'bg-red-700')
    }
  }

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
              <EditCategoryForm
                closeModal={setShowEditModal}
                data={item}
              />
            </Modal>
          ) : null}
          <button
            onClick={() => deleteCategory(item._id)}
            className='rounded-full hover:bg-red-200 text-red-400 hover:text-red-600 p-1'
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  )
}
