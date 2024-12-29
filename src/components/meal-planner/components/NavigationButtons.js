'use client';

// components/meal-planner/components/NavigationButtons.js
import { FaArrowLeft, FaArrowRight, FaSpinner } from 'react-icons/fa';

const NavigationButtons = ({ currentStep, loading, onBack, onNext, onGenerate }) => {
    return (
        <div className="flex justify-between mt-8">
            {currentStep > 1 && currentStep < 4 && (
                <button
                    onClick={onBack}
                    className="px-6 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
                >
                    <FaArrowLeft className="w-4 h-4" />
                    Back
                </button>
            )}

            {currentStep < 2 && (
                <button
                    onClick={onNext}
                    className="ml-auto bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                    Next
                    <FaArrowRight className="w-4 h-4" />
                </button>
            )}

            {currentStep === 2 && (
                <button
                    onClick={onGenerate}
                    disabled={loading}
                    className="ml-auto bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <FaSpinner className="w-4 h-4 animate-spin" />
                            Creating Your Plan...
                        </>
                    ) : (
                        <>
                            Generate Meal Plan
                            <FaArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default NavigationButtons;