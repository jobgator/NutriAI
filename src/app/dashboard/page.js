'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from '@clerk/nextjs';
import MealPlanner from '@/components/meal-planner/MealPlanner.js';
import { FaChevronDown, FaUtensils, FaCamera, FaHeart } from 'react-icons/fa';
import FoodScanner from '@/components/food-scanner/FoodScanner';

const DashboardPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState('meal-planner');

    const renderFeature = () => {
        switch (activeFeature) {
            case 'food-scanner':
                return <FoodScanner />;
            case 'meal-planner':
                return <MealPlanner />;
            default:
                return <MealPlanner />;
        }
    };

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
                                        <button
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            onClick={() => {
                                                setActiveFeature('meal-planner');
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <FaUtensils className="w-4 h-4" />
                                            <span>Meal Planner</span>
                                        </button>

                                        <button
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                            onClick={() => {
                                                setActiveFeature('food-scanner');
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            <FaCamera className="w-4 h-4" />
                                            <span>Food Scanner</span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sign Out Button */}
                            <SignOutButton />
                        </SignedIn>
                        <SignedOut>
                            <SignUpButton />
                        </SignedOut>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-8">
                {renderFeature()}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    &copy; 2023 Ben NutriAI. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default DashboardPage;