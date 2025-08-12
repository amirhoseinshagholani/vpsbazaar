import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // گرفتن کوکی‌ها از request
  const userEmail = request.cookies.get('user_vpsbazaar_email')?.value;
  const adminId = request.cookies.get('admin_id')?.value;
  const isLoggedIn = userEmail && adminId;

  // ریدایرکت به login اگر لاگین نیست
  if (!isLoggedIn && url !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ریدایرکت به panel اگر لاگین هست و صفحه login رو باز کرده
  if (isLoggedIn && url === '/login') {
    return NextResponse.redirect(new URL('/panel', request.url));
  }

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
    '/login',
    '/panel/:path*', // درست برای تمام زیرمسیرهای /panel
  ],
};

