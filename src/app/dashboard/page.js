'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from '@clerk/nextjs';
/* import {
    Loader2, ChevronRight, ChevronLeft, Users, Heart, Cookie, Timer,
    ChefHat, Scale, Info, Apple, Carrot, Coffee, UtensilsCrossed
} from 'lucide-react';

// Define Card components directly in this file
const Card = ({ children, className }) => {
    return <div className={`card ${className}`}>{children}</div>;
};

const CardHeader = ({ children, className }) => {
    return <div className={`card-header ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
    return <div className={`card-title ${className}`}>{children}</div>;
};

const CardDescription = ({ children, className }) => {
    return <div className={`card-description ${className}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
    return <div className={`card-content ${className}`}>{children}</div>;
};

// Define other components directly in this file
const Button = ({ children, onClick, className }) => {
    return <button onClick={onClick} className={className}>{children}</button>;
};

const Input = (props) => {
    return <input {...props} />;
};

const Label = ({ children, htmlFor, className }) => {
    return <label htmlFor={htmlFor} className={className}>{children}</label>;
};

const Tooltip = ({ text, children }) => {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltiptext">{text}</span>
        </div>
    );
};

const Alert = ({ message, type }) => {
    const alertType = type === 'error' ? 'alert-error' : 'alert-info';
    return (
        <div className={`alert ${alertType}`}>
            {message}
        </div>
    );
}; */

const LandingPage = () => {
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

                Stevensdfhsdhfsdhfhsdfhsdfhsdfh            </main>
            {/* Footer d*/}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto text-center">
                    &copy; 2023 Ben NutriAI. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;