import useCategories from '@/components/hooks/queries/categories'
import CategoryItem from './categoryItem'

export default function CategoryList() {
  const { categories, loading } = useCategories()

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <>
      <div className='relative overflow-x-auto shadow-md rounded-md'>
        <table className='text-right w-full text-sm text-white'>
          <thead className='text-md bg-slate-700 text-white border-b-4 border-b-slate-800'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3'
              >
                عنوان
              </th>
              <th
                scope='col'
                className='px-6 py-3 hidden md:block'
              >
                تعداد مقالات
              </th>
              <th
                scope='col'
                className='px-6 py-3'
              >
                <span className='sr-only'>عملیات</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item: any) => (
              <CategoryItem
                key={item.title}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col items-center my-5'>
        <span className='text-md text-gray-300'>
          نمایش <span className='font-semibold text-white'>۱</span> تا{' '}
          <span className='font-semibold text-white'>۱۲</span> از{' '}
          <span className='font-semibold text-white'>۱۵۰</span> رکورد
        </span>
        <div className='inline-flex mt-2 xs:mt-0'>
          <button className='rounded-r py-2 px-4 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900'>
            بعد
          </button>
          <button className='rounded-l py-2 px-4 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900'>
            قبل
          </button>
        </div>
      </div>
    </>
  )
}
