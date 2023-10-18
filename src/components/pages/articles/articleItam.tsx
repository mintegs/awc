import Link from 'next/link'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export default function ArticleItem({ item }: { item: any }) {
  function getStatus(status: string) {
    switch (status) {
      case 'INACTIVE':
        return 'غیرفعال'

      case 'ACTIVE':
        return 'فعال'

      default:
        return 'نامعلوم'
    }
  }

  return (
    <tr
      className={`border-b bg-slate-800 border-slate-700 hover:bg-slate-700 hover:bg-opacity-60`}
    >
      <th
        scope='row'
        className='px-6 py-2 font-medium whitespace-nowrap'
      >
        {item.title}
      </th>
      <th className='px-6 py-2 font-medium whitespace-nowrap'>
        {item.user.username}
      </th>
      <th className='px-6 py-2 font-medium whitespace-nowrap'>
        <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'>
          {getStatus(item.status)}
        </span>
      </th>
      <td className='px-6 py-2'>
        {item.createdAt === item.updatedAt
          ? new Intl.DateTimeFormat('fa-IR').format(new Date(item.createdAt))
          : `${item.createdAt} + '/' + ${item.updatedAt}`}
      </td>
      <td className='text-center items-center'>
        <div className='flex justify-center items-center'>
          <Link
            href={`/dashboard/articles/edit/${item._id}`}
            className='rounded-full hover:bg-blue-200 text-blue-400 hover:text-blue-600 p-1'
          >
            <FiEdit2 size={20} />
          </Link>
          <button
            // onClick={() => deleteCategory(item._id)}
            className='rounded-full hover:bg-red-200 text-red-400 hover:text-red-600 p-1'
            // disabled={isLoading}
          >
            {/* {isLoading ? (
              <SpinnerSvg classNames={`h-5 w-5 text-white`} />
            ) : (
              <FiTrash2 size={20} />
            )} */}
            <FiTrash2 size={20} />
          </button>
        </div>
      </td>
    </tr>
  )
}
