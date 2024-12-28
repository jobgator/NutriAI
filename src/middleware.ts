import { clerkMiddleware } from "@clerk/nextjs/server";

export const publicRoutes = ["/", "/sign-in", "/sign-up", "/sign-in/sso-callback"];

export default clerkMiddleware();

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!.*\\..*|_next).*)",
        "/",
        "/(api|trpc)(.*)",
    ],
};