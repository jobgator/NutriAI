import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// In your middleware.ts, add routes that require authentication
// Any route not listed as public will require authentication
export const publicRoutes = ["/", "/sign-in", "/sign-up"];