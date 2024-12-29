"use client";

import React, { useState } from 'react';
import {
    Loader2, ChevronRight, ChevronLeft, Users, Heart, Cookie, Timer,
    ChefHat, Scale, Info, Carrot, Coffee, UtensilsCrossed
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function MealPlanner() {
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
        setPreferences(prev => ({
            ...prev,
            [name]: value
        }));
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
                        icon: Coffee
                    },
                    {
                        name: "Lunch",
                        dish: "Sheet Pan Chicken Fajitas",
                        servings: preferences.familySize,
                        calories: 450,
                        cookTime: "25 mins",
                        icon: Carrot
                    },
                    {
                        name: "Dinner",
                        dish: "One-Pot Family Pasta",
                        servings: preferences.familySize,
                        calories: 550,
                        cookTime: "20 mins",
                        icon: UtensilsCrossed
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

    const renderWelcome = () => (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
            <Card className="w-full max-w-4xl transform hover:scale-[1.01] transition-all duration-300">
                <CardContent className="p-8">
                    <div className="text-center space-y-6">
                        <div className="flex justify-center animate-bounce">
                            <ChefHat className="h-16 w-16 text-blue-500" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Welcome to AI Meal Planner
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Let's create your personalized meal plan in just a few steps.
                            We'll consider your family size, preferences, and dietary needs.
                        </p>
                        <Button
                            onClick={() => {
                                setStarted(true);
                                setCurrentStep(1);
                            }}
                            className="mt-8 px-8 py-6 text-lg"
                        >
                            Get Started
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    const renderBasicInfo = () => (
        <Card className="w-full bg-white shadow-lg">
            <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Tell Us About Your Household</CardTitle>
                <CardDescription>
                    Let's start with the basics to personalize your meal plan
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid gap-6">
                    <div className="space-y-2">
                        <label htmlFor="familySize" className="text-lg">
                            How many people are you cooking for?
                        </label>
                        <select
                            id="familySize"
                            name="familySize"
                            value={preferences.familySize}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg text-lg"
                        >
                            <option value="1">Just me</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 or more</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="cookingTime" className="text-lg">
                            How much time do you have for cooking?
                        </label>
                        <select
                            id="cookingTime"
                            name="cookingTime"
                            value={preferences.cookingTime}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg text-lg"
                        >
                            <option value="15">Quick meals (15 minutes)</option>
                            <option value="30">Medium (30 minutes)</option>
                            <option value="45">Relaxed cooking (45 minutes)</option>
                            <option value="60">I love cooking! (60+ minutes)</option>
                        </select>
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    const renderDietaryPreferences = () => (
        <Card className="w-full bg-white shadow-lg">
            <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Dietary Preferences</CardTitle>
                <CardDescription>
                    Help us understand your dietary needs and preferences
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="dietType" className="text-lg">
                        Diet Type
                    </label>
                    <select
                        id="dietType"
                        name="dietType"
                        value={preferences.dietType}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg text-lg"
                    >
                        <option value="balanced">Balanced</option>
                        <option value="lowCarb">Low Carb</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Keto</option>
                        <option value="mediterranean">Mediterranean</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="allergies" className="text-lg">
                        Any allergies or restrictions?
                    </label>
                    <Input
                        id="allergies"
                        name="allergies"
                        placeholder="e.g., nuts, dairy, gluten"
                        value={preferences.allergies}
                        onChange={handleInputChange}
                    />
                </div>
            </CardContent>
        </Card>
    );

    const renderMealPlan = () => (
        <Card className="w-full bg-white shadow-lg">
            <CardHeader className="text-center">
                <Cookie className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Your Personalized Meal Plan</CardTitle>
                <CardDescription>
                    Perfect for {preferences.familySize} {parseInt(preferences.familySize) === 1 ? 'person' : 'people'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {mealPlan?.meals.map((meal, index) => (
                        <Card key={index} className="border-2 border-blue-100">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <meal.icon className="h-6 w-6 text-blue-500" />
                                    <h3 className="text-xl font-bold">{meal.name}</h3>
                                </div>
                                <p className="text-2xl text-gray-800 mb-4">{meal.dish}</p>
                                <div className="grid grid-cols-3 gap-4 text-sm bg-blue-50 p-4 rounded-lg">
                                    <div>
                                        <span className="font-semibold block text-gray-600">Serves</span>
                                        {meal.servings}
                                    </div>
                                    <div>
                                        <span className="font-semibold block text-gray-600">Calories</span>
                                        {meal.calories}/serving
                                    </div>
                                    <div>
                                        <span className="font-semibold block text-gray-600">Cook Time</span>
                                        {meal.cookTime}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 0: return renderWelcome();
            case 1: return renderBasicInfo();
            case 2: return renderDietaryPreferences();
            case 3: return renderMealPlan();
            default: return null;
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="max-w-4xl mx-auto px-4">
                {renderStep()}

                <div className="flex justify-between mt-8">
                    {currentStep > 0 && currentStep < 3 && (
                        <Button
                            variant="outline"
                            onClick={handleBack}
                        >
                            <ChevronLeft className="mr-2" /> Back
                        </Button>
                    )}

                    {currentStep < 2 && (
                        <Button
                            className="ml-auto"
                            onClick={handleNext}
                        >
                            Next <ChevronRight className="ml-2" />
                        </Button>
                    )}

                    {currentStep === 2 && (
                        <Button
                            className="ml-auto"
                            onClick={generateMealPlan}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 animate-spin" />
                                    Creating Your Plan...
                                </>
                            ) : (
                                <>Generate Meal Plan <ChevronRight className="ml-2" /></>
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}