'use client'
import { oauthGithubUrl, oauthGoogleUrl } from '@/lib/generateOAuthUrl'
import { useRouter } from 'next/navigation'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SignInWithSocials() {
  const { push } = useRouter()

  return (
    <ul className='flex justify-center mt-5'>
      <li className='pl-4'>
        <button
          onClick={() => push(oauthGoogleUrl())}
          className='flex w-16 h-16 items-center justify-center rounded-full bg-red-500 hover:bg-opacity-90 transition'
        >
          <FaGoogle
            size={25}
            className='text-white'
          />
        </button>
      </li>
      <li className='pr-4'>
        <button
          onClick={() => push(oauthGithubUrl())}
          className='flex w-16 h-16 items-center justify-center rounded-full bg-gray-600 hover:bg-opacity-90 transition'
        >
          <FaGithub
            size={25}
            className='text-white'
          />
        </button>
      </li>
    </ul>
  )
}
