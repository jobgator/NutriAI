'use client';

// components/meal-planner/components/MealPlanDisplay.js
import { FaCoffee, FaCarrot, FaUtensils } from 'react-icons/fa';

const iconMap = {
    Coffee: FaCoffee,
    Carrot: FaCarrot,
    UtensilsCrossed: FaUtensils
};

const MealPlanDisplay = ({ mealPlan, preferences }) => {
    if (!mealPlan) return null;

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Your Personalized Meal Plan</h2>
                <p className="text-gray-600 mt-2">
                    Perfect for {preferences.familySize} {parseInt(preferences.familySize) === 1 ? 'person' : 'people'}
                </p>
            </div>

            <div className="space-y-6">
                {mealPlan.meals.map((meal, index) => {
                    const Icon = iconMap[meal.icon];
                    return (
                        <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                {Icon && <Icon className="h-6 w-6 text-blue-500" />}
                                <h3 className="text-xl font-bold">{meal.name}</h3>
                            </div>

                            <p className="text-xl mb-4">{meal.dish}</p>

                            <div className="grid grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                                <div>
                                    <span className="font-semibold block">Serves</span>
                                    {meal.servings}
                                </div>
                                <div>
                                    <span className="font-semibold block">Calories</span>
                                    {meal.calories}/serving
                                </div>
                                <div>
                                    <span className="font-semibold block">Cook Time</span>
                                    {meal.cookTime}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MealPlanDisplay;