import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicPaths = ["/*", "/sign-in*", "/sign-up*"];
const isPublic = createRouteMatcher(publicPaths);

export default clerkMiddleware((auth, req, evt) => {
    if (isPublic(req)) {
        return;
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