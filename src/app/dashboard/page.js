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
                            {/* Features Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center space-x-1 hover:text-gray-300 transition-colors py-2"
                                >
                                    <span>Features</span>
                                    <FaChevronDown className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                                        onBlur={() => setIsDropdownOpen(false)}
                                    >
                                        <Link
                                            href="/meal-planner"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <FaUtensils className="w-4 h-4" />
                                            <span>Meal Planner</span>
                                        </Link>
                                        <Link
                                            href="/ingredient-scanner"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <FaCamera className="w-4 h-4" />
                                            <span>Ingredient Scanner</span>
                                        </Link>
                                        <Link
                                            href="/saved-recipes"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <FaHeart className="w-4 h-4" />
                                            <span>Saved Recipes</span>
                                        </Link>
                                    </div>
                                )}
                            </div>

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