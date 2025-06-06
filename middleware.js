import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let dummyUserData = {
    role: "Student",
    email: "text@admin.com"
  }
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData?.role === "Admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login",  request.url))
  }
  return NextResponse.next();
}
 
