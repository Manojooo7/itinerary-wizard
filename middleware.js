import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtecttedRoutes = createRouteMatcher([
  "/itineraries(.*)"
])


export default clerkMiddleware((auth,req)=>{
  if (!auth().userId && isProtecttedRoutes(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  if (
    auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== "/" &&
    req.nextUrl.pathname !== "/"
  ){
    return NextResponse.redirect(new URL("/", req.url))
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};