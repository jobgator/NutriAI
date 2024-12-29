'use client';

// components/meal-planner/hooks/useMealPlanner.js
import { useState } from 'react';

export default function useMealPlanner() {
    const [started, setStarted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [preferences, setPreferences] = useState({
        familySize: '1',
        dietType: 'balanced',
        allergies: '',
        foodPreferences: '',
        cookingTime: '30'
    });
    const [mealPlan, setMealPlan] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPreferences(prev => ({ ...prev, [name]: value }));
    };

    const handleStart = () => {
        setStarted(true);
        setCurrentStep(1);
    };

    const handleNext = () => {
        setCurrentStep(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    const generateMealPlan = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setMealPlan({
                meals: [
                    {
                        name: "Breakfast",
                        dish: "Family-Style Overnight Oats",
                        servings: preferences.familySize,
                        calories: 350,
                        cookTime: "10 mins",
                        icon: 'Coffee'
                    },
                    {
                        name: "Lunch",
                        dish: "Sheet Pan Chicken Fajitas",
                        servings: preferences.familySize,
                        calories: 450,
                        cookTime: "25 mins",
                        icon: 'Carrot'
                    },
                    {
                        name: "Dinner",
                        dish: "One-Pot Family Pasta",
                        servings: preferences.familySize,
                        calories: 550,
                        cookTime: "20 mins",
                        icon: 'UtensilsCrossed'
                    }
                ]
            });
            setCurrentStep(3);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
}