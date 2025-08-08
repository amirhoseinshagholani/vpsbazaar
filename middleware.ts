import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  const gonePaths = [
    '/cart.php',
    '/store/grwh-srwr-mjzy/pro',
    '/store/grwh-srwr-mjzy/solo',
    '/store/grwh-srwr-mjzy/flex',
    '/download',
  ];

  if (gonePaths.includes(url)) {
    return new NextResponse('This page is no longer available', { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/cart.php',
    '/store/grwh-srwr-mjzy/pro',
    '/store/grwh-srwr-mjzy/solo',
    '/store/grwh-srwr-mjzy/flex',
    '/download',
  ],
};
