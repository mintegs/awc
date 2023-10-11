export default function CategoryListSkeleton() {
  function addRow() {
    let elements = []
    for (let index = 1; index <= 10; index++) {
      elements.push(
        <tr className='border-b bg-slate-800 border-slate-700 hover:bg-slate-700 hover:bg-opacity-60'>
          <th
            scope='row'
            className='px-6 py-2 font-medium whitespace-nowrap'
          >
            <div className='h-5 w-32 rounded-md bg-gray-400 animate-pulse'></div>
          </th>
          <td className='px-6 py-2 hidden md:block'>
            <div className='h-5 w-24 rounded-md bg-gray-400 animate-pulse'></div>
          </td>
          <td className='text-center items-center'>
            <div className='flex justify-center items-center'>
              <div className='h-5 w-5 rounded-full bg-gray-400 animate-pulse'></div>
              <div className='h-5 w-5 mr-2 rounded-full bg-gray-400 animate-pulse'></div>
            </div>
          </td>
        </tr>
      )
    }
    return elements
  }
  return (
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
        <tbody>{addRow()}</tbody>
      </table>
    </div>
  )
}
