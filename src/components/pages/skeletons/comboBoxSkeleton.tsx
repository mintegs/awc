interface Props {
  title: string
  placeholder: string
}
export default function ComboBoxSkeleton({ title, placeholder }: Props) {
  function addRow() {
    let elements = []
    for (let index = 1; index <= 3; index++) {
      elements.push(
        <div className='h-10 w-full rounded-md mb-1 bg-gray-400 animate-pulse'></div>
      )
    }
    return elements
  }
  return (
    <div className='relative overflow-x-auto shadow-md rounded-md'>
      <div className='bg-slate-700 p-2'>
        <h3 className='text-base text-gray-300 font-bold capitalize mb-2'>
          {title}
        </h3>
        <input
          className='w-full rounded-md border border-slate-600 py-3 px-5 bg-slate-600  text-white text-base outline-none focus-visible:shadow-none focus:border-blue-500 focus:border-2 transition'
          type='text'
          placeholder={placeholder}
          disabled
        />
        {addRow()}
      </div>
    </div>
  )
}
