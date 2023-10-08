import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/auth'
  console.log('has cookie', request.cookies.has('mintegs_token'))
  if (request.cookies.has('mintegs_token')) {
    return NextResponse.next()
  }

  return NextResponse.redirect(url)
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }
