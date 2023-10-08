import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('has cookie', request.cookies.has('mintegs_token'))
  if (request.cookies.has('mintegs_token')) {
    return NextResponse.next()
  }

  return NextResponse.json(
    { success: false, message: 'authentication failed' },
    { status: 401 }
  )
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }
