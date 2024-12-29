'use client';

import React from 'react';
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from '@clerk/nextjs';
import MealPlanner from '@/components/MealPlanner';

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/dashboard" className="text-xl font-bold">
                        NutriAI
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <SignedIn>
                            <div className="flex items-center space-x-2">
                                <SignOutButton />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <SignUpButton />
                        </SignedOut>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-8">
                <MealPlanner />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    &copy; {new Date().getFullYear()} Ben NutriAI. All rights reserved.
                </div>
            </footer>
        </div>
    );
}