import SpinnerSvg from '../svg/spinnerSvg'

export default function Loading() {
  return (
    <div className='fixed inset-0 bg-slate-800 bg-opacity-90 backdrop-blur-sm flex justify-center items-center'>
      <SpinnerSvg classNames='h-20 w-20 text-blue-500' />
    </div>
  )
}
