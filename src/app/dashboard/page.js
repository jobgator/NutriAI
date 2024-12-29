'use client';
import React, { useState } from 'react';

export default function DashboardPage() {
    const [preferences, setPreferences] = useState({
        familySize: '1',
        dietType: 'balanced'
    });

    const [mealPlan, setMealPlan] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPreferences(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateMealPlan = () => {
        setMealPlan({
            meals: [
                {
                    name: "Breakfast",
                    dish: "Overnight Oats",
                    servings: preferences.familySize
                },
                {
                    name: "Lunch",
                    dish: "Chicken Salad",
                    servings: preferences.familySize
                },
                {
                    name: "Dinner",
                    dish: "Pasta",
                    servings: preferences.familySize
                }
            ]
        });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Meal Planner</h1>

            <div>
                <label>
                    Family Size:
                    <select
                        name="familySize"
                        value={preferences.familySize}
                        onChange={handleInputChange}
                    >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                    </select>
                </label>
            </div>

            <div>
                <label>
                    Diet Type:
                    <select
                        name="dietType"
                        value={preferences.dietType}
                        onChange={handleInputChange}
                    >
                        <option value="balanced">Balanced</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </label>
            </div>

            <button onClick={generateMealPlan}>
                Generate Meal Plan
            </button>

            {mealPlan && (
                <div>
                    <h2>Your Meal Plan</h2>
                    {mealPlan.meals.map((meal, index) => (
                        <div key={index}>
                            <h3>{meal.name}</h3>
                            <p>Dish: {meal.dish}</p>
                            <p>Servings: {meal.servings}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}