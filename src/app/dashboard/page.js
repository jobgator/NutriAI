'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from '@clerk/nextjs';
import MealPlanner from '@/components/meal-planner/MealPlanner.js';


const DashboardPage = () => {
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
                {/* Your content here */}

                Stevensdfhsdhfsdhfhsdfhsdfhsdfh


                <MealPlanner />
            </main>
            {/* Footer d*/}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    &copy; 2023 Ben NutriAI. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default DashboardPage;