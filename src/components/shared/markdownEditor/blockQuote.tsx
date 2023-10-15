'use client'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function BlockQuote({ children, ...props }: any) {
  return (
    <figure className='max-w-screen-md mx-auto mb-4 last:mb-0 text-center p-3 bg-gray-900 rounded-md'>
      <FaQuoteRight className='w-10 h-10 mb-3 text-gray-600 ml-auto' />
      <blockquote>{children}</blockquote>
      <FaQuoteLeft className='w-10 h-10 mt-3 text-gray-600 mr-auto' />
    </figure>
  )
}
