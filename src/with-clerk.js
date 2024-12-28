// src/with-clerk.js
import { ClerkProvider } from '@clerk/nextjs';
import { NextPage } from 'next';

export const withClerk = (WrappedComponent) => {
    return function WithClerk(props) {
        return (
            <ClerkProvider
                publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            >
                <WrappedComponent {...props} />
            </ClerkProvider>
        );
    };
};