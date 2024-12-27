// src/app/page.tsx

import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        NutriAI
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#features" className="hover:underline">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:underline">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
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
                            <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                Sign Up
                            </Link>
                            <Link href="/learn-more" className="text-blue-500 hover:underline">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">AI-Powered Recommendations</h3>
                                <p className="text-gray-600">
                                    Our advanced AI analyzes your preferences to create personalized meal plans.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">Weekly Meal Planning</h3>
                                <p className="text-gray-600">
                                    Get a full week's worth of meals planned out, saving you time and reducing food waste.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">Dietary Customization</h3>
                                <p className="text-gray-600">
                                    Whether you're vegan, keto, or have allergies, our app adapts to your specific needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="bg-gray-100 py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">Free</h3>
                                <p className="text-4xl font-bold mb-4">$0</p>
                                <ul className="mb-6 space-y-2">
                                    <li>1 meal plan per week</li>
                                    <li>Basic customization</li>
                                </ul>
                                <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                    Get Started
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded shadow border-2 border-blue-500">
                                <h3 className="text-xl font-bold mb-4">Pro</h3>
                                <p className="text-4xl font-bold mb-4">$9.99</p>
                                <ul className="mb-6 space-y-2">
                                    <li>Unlimited meal plans</li>
                                    <li>Advanced customization</li>
                                    <li>Grocery list generation</li>
                                </ul>
                                <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                    Subscribe Now
                                </Link>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold mb-4">Family</h3>
                                <p className="text-4xl font-bold mb-4">$19.99</p>
                                <ul className="mb-6 space-y-2">
                                    <li>All Pro features</li>
                                    <li>Up to 6 family members</li>
                                    <li>Family meal coordination</li>
                                </ul>
                                <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                                    Subscribe Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
                        <form className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows={5}
                                    placeholder="Enter your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <p className="text-sm">&copy; 2023 NutriAI. All rights reserved.</p>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#" className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}