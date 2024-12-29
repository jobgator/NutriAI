'use client';

// components/meal-planner/MealPlanner.js
import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import BasicInfoForm from './components/BasicInfoForm';
import DietaryForm from './components/DietaryForm';
import MealPlanDisplay from './components/MealPlanDisplay';
import ProgressSteps from './components/ProgressSteps';
import NavigationButtons from './components/NavigationButtons';
import useMealPlanner from './hooks/useMealPlanner';

const MealPlanner = () => {
    const {
        currentStep,
        preferences,
        mealPlan,
        loading,
        started,
        handleInputChange,
        handleStart,
        handleNext,
        handleBack,
        generateMealPlan
    } = useMealPlanner();

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <WelcomeCard onStart={handleStart} />;
            case 1:
                return <BasicInfoForm preferences={preferences} onChange={handleInputChange} />;
            case 2:
                return <DietaryForm preferences={preferences} onChange={handleInputChange} />;
            case 3:
                return <MealPlanDisplay mealPlan={mealPlan} preferences={preferences} />;
            default:
                return null;
        }
    };

    if (!started) return <WelcomeCard onStart={handleStart} />;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                {currentStep > 0 && currentStep < 4 && (
                    <ProgressSteps currentStep={currentStep} />
                )}

                {renderStep()}

                <NavigationButtons
                    currentStep={currentStep}
                    loading={loading}
                    onBack={handleBack}
                    onNext={handleNext}
                    onGenerate={generateMealPlan}
                />
            </div>
        </div>
    );
};

export default MealPlanner;