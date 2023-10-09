import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   console.log('has cookie', request.cookies.has('mintegs_token'))
  //   if (request.cookies.has('mintegs_token')) {
  //     return NextResponse.next()
  //   }

  return NextResponse.redirect(new URL('/test', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth'],
}
