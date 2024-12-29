// pages/landing.js
import Link from "next/link";
import { useClerk, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';

const LandingPage = () => {
    const { user } = useClerk();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4 px-6">
                {/* ... */}
            </header>

            <main className="flex-1 py-12 md:py-24">
                <section id="hero" className="bg-gray-100 py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Welcome to NutriAI
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl mb-8">
                            AI-powered meal planning made easy.
                        </p>
                        <div className="flex space-x-4">
                            <SignedOut>
                                <SignUpButton mode="modal">
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <Link href="/dashboard" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                    Go to Dashboard
                                </Link>
                            </SignedIn>
                            <Link href="/learn-more" className="text-blue-500 hover:underline">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Rest of the landing page content */}

            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                {/* ... */}
            </footer>
        </div>
    );
};

export default LandingPage;