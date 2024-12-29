'use client';


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Tooltip from '@/components/ui/tooltip';
import Alert from '@/components/ui/alert';
import {
    Loader2, ChevronRight, ChevronLeft, Users, Heart, Cookie, Timer,
    ChefHat, Scale, Info, Apple, Carrot, Coffee, UtensilsCrossed
} from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

const MealPlanner = () => {
    const [started, setStarted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showTip, setShowTip] = useState(true);
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
                        <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">
                            Welcome to AI Meal Planner
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
                            Let's create your personalized meal plan in just a few steps.
                            We'll consider your family size, preferences, and dietary needs.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-12">
                            {[
                                {
                                    icon: Users,
                                    title: "Family Friendly",
                                    description: "Meals for any family size",
                                    tooltip: "Adjust portions and recipes for your whole family"
                                },
                                {
                                    icon: Heart,
                                    title: "Dietary Preferences",
                                    description: "Customized to your needs",
                                    tooltip: "Accommodates allergies and dietary restrictions"
                                },
                                {
                                    icon: Timer,
                                    title: "Time-Saving",
                                    description: "Quick and easy recipes",
                                    tooltip: "Recipes that fit your schedule"
                                }
                            ].map((feature, index) => (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="text-center space-y-2 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                                                <div className="flex justify-center">
                                                    <feature.icon className="h-8 w-8 text-blue-500" />
                                                </div>
                                                <h3 className="font-semibold">{feature.title}</h3>
                                                <p className="text-sm text-gray-600">{feature.description}</p>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{feature.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                        <Button
                            onClick={() => {
                                setStarted(true);
                                setCurrentStep(1);
                            }}
                            className="mt-8 px-8 py-6 text-lg animate-pulse hover:animate-none"
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
        <Card className="w-full bg-white shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-blue-500 animate-bounce-slow" />
                </div>
                <CardTitle className="text-2xl">Tell Us About Your Household</CardTitle>
                <CardDescription className="text-lg">
                    Let's start with the basics to personalize your meal plan
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                {showTip && (
                    <Alert className="bg-blue-50 mb-4">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                            Tip: Your family size helps us adjust portion sizes and recipe quantities.
                        </AlertDescription>
                    </Alert>
                )}
                <div className="grid gap-6">
                    <TooltipProvider>
                        <div className="space-y-2">
                            <Label htmlFor="familySize" className="text-lg flex items-center gap-2">
                                How many people are you cooking for?
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-blue-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>We'll adjust portion sizes and ingredients accordingly</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Label>
                            <select
                                id="familySize"
                                name="familySize"
                                value={preferences.familySize}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg text-lg hover:border-blue-300 transition-colors"
                            >
                                <option value="1">Just me</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 or more</option>
                            </select>
                        </div>
                    </TooltipProvider>

                    <TooltipProvider>
                        <div className="space-y-2">
                            <Label htmlFor="cookingTime" className="text-lg flex items-center gap-2">
                                How much time do you have for cooking?
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 text-blue-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>We'll suggest recipes that fit your schedule</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Label>
                            <select
                                id="cookingTime"
                                name="cookingTime"
                                value={preferences.cookingTime}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg text-lg hover:border-blue-300 transition-colors"
                            >
                                <option value="15">Quick meals (15 minutes)</option>
                                <option value="30">Medium (30 minutes)</option>
                                <option value="45">Relaxed cooking (45 minutes)</option>
                                <option value="60">I love cooking! (60+ minutes)</option>
                            </select>
                        </div>
                    </TooltipProvider>
                </div>
            </CardContent>
        </Card>
    );

    // .... [Previous renderDietaryPreferences and renderMealPlan functions remain the same]

    const renderProgress = () => (
        <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${currentStep === step
                                ? 'bg-blue-500 text-white'
                                : currentStep > step
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200'
                                }`}
                        >
                            {step}
                        </div>
                        {step < 3 && (
                            <div
                                className={`w-16 h-1 transition-all duration-500 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'
                                    }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

    const renderDietaryPreferences = () => (
        <Card className="w-full bg-white shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                    <Heart className="h-12 w-12 text-blue-500 animate-bounce-slow" />
                </div>
                <CardTitle className="text-2xl">Dietary Preferences</CardTitle>
                <CardDescription className="text-lg">
                    Help us understand your dietary needs and preferences
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <TooltipProvider>
                    <div className="space-y-2">
                        <Label htmlFor="dietType" className="text-lg flex items-center gap-2">
                            Diet Type
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="h-4 w-4 text-blue-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Choose the diet that best matches your lifestyle</p>
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                        <select
                            id="dietType"
                            name="dietType"
                            value={preferences.dietType}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg text-lg hover:border-blue-300 transition-colors"
                        >
                            <option value="balanced">Balanced</option>
                            <option value="lowCarb">Low Carb</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="keto">Keto</option>
                            <option value="mediterranean">Mediterranean</option>
                        </select>
                    </div>
                </TooltipProvider>

                <TooltipProvider>
                    <div className="space-y-2">
                        <Label htmlFor="allergies" className="text-lg flex items-center gap-2">
                            Any allergies or restrictions?
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="h-4 w-4 text-blue-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>We'll ensure your meals are safe and suitable</p>
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                        <Input
                            id="allergies"
                            name="allergies"
                            placeholder="e.g., nuts, dairy, gluten"
                            value={preferences.allergies}
                            onChange={handleInputChange}
                            className="p-3 text-lg hover:border-blue-300 transition-colors"
                        />
                    </div>
                </TooltipProvider>

                <TooltipProvider>
                    <div className="space-y-2">
                        <Label htmlFor="foodPreferences" className="text-lg flex items-center gap-2">
                            What foods do you enjoy?
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="h-4 w-4 text-blue-500" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>We'll include more of what you love in your meal plan</p>
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                        <Input
                            id="foodPreferences"
                            name="foodPreferences"
                            placeholder="e.g., chicken, pasta, salads"
                            value={preferences.foodPreferences}
                            onChange={handleInputChange}
                            className="p-3 text-lg hover:border-blue-300 transition-colors"
                        />
                    </div>
                </TooltipProvider>
            </CardContent>
        </Card>
    );

    const renderMealPlan = () => (
        <Card className="w-full bg-white shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                    <Cookie className="h-12 w-12 text-blue-500 animate-bounce-slow" />
                </div>
                <CardTitle className="text-2xl">Your Personalized Meal Plan</CardTitle>
                <CardDescription className="text-lg">
                    Perfect for {preferences.familySize} {parseInt(preferences.familySize) === 1 ? 'person' : 'people'}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {mealPlan?.meals.map((meal, index) => (
                        <Card key={index} className="border-2 border-blue-100 hover:border-blue-200 transition-colors transform hover:scale-[1.02]">
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
            case 0:
                return renderWelcome();
            case 1:
                return renderBasicInfo();
            case 2:
                return renderDietaryPreferences();
            case 3:
                return renderMealPlan();
            default:
                return null;
        }
    };

    if (!started) {
        return renderWelcome();
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="max-w-4xl mx-auto px-4">
                {currentStep > 0 && currentStep < 4 && renderProgress()}

                <div className="transform transition-all duration-500 ease-in-out">
                    {renderStep()}
                </div>

                <div className="flex justify-between mt-8">
                    {currentStep > 1 && currentStep < 4 && (
                        <Button
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            variant="outline"
                            className="px-6 hover:scale-105 transition-transform"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    )}

                    {currentStep < 2 && (
                        <Button
                            onClick={() => setCurrentStep(prev => prev + 1)}
                            className="ml-auto px-6 hover:scale-105 transition-transform"
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}

                    {currentStep === 2 && (
                        <Button
                            onClick={generateMealPlan}
                            disabled={loading}
                            className="ml-auto px-6 hover:scale-105 transition-transform"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating Your Plan...
                                </>
                            ) : (
                                <>
                                    Generate Meal Plan
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MealPlanner;