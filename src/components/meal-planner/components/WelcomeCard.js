'use client';

// components/meal-planner/components/WelcomeCard.js
import { FaUtensils, FaUsers, FaHeart, FaClock } from 'react-icons/fa';

const WelcomeCard = ({ onStart }) => {
    const features = [
        {
            icon: FaUsers,
            title: "Family Friendly",
            description: "Meals for any family size"
        },
        {
            icon: FaHeart,
            title: "Dietary Preferences",
            description: "Customized to your needs"
        },
        {
            icon: FaClock,
            title: "Time-Saving",
            description: "Quick and easy recipes"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center space-y-6">
                <div className="inline-block p-3 bg-blue-100 rounded-full">
                    <FaUtensils className="h-12 w-12 text-blue-500" />
                </div>

                <h1 className="text-4xl font-bold text-gray-900">
                    Welcome to AI Meal Planner
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Let's create your personalized meal plan in just a few steps.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                            <feature.icon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={onStart}
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                    Get Started
                    <span className="text-xl">→</span>
                </button>
            </div>
        </div>
    );
};

export default WelcomeCard;