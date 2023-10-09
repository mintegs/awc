import { NextRequest } from 'next/server'
import fetcher from './fetcher'

export default async function authenticate(req: NextRequest) {
  try {
    if (req.cookies.has('mintegs_token')) {
      const { data } = await fetcher(
        'https://jsonplaceholder.typicode.com/users'
      ).get('/1')

      if (data.role === 'ADMIN') {
        return true
      }
    }
    console.log('false', false)
    return false
  } catch (error) {
    console.log('error', error)
    return false
  }
}
