'use client';

import React, { useState, useRef } from 'react';
import { analyzeFoodImage } from '@/utils/clarifai';

// MealDB utility functions
const searchRecipesByIngredient = async (ingredient) => {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};

const getRecipeDetails = async (id) => {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        return data.meals?.[0] || null;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
};

export default function FoodScanner() {
    const [photos, setPhotos] = useState([]);
    const [identifiedIngredients, setIdentifiedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handlePhotoCapture = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
            setIsLoading(true);
            setError(null);
            try {
                const base64Image = event.target.result.split(',')[1];
                setPhotos(prev => [...prev, event.target.result]);

                // Get ingredients from Clarifai
                const predictions = await analyzeFoodImage(base64Image);
                const newIngredients = predictions
                    .filter(pred => pred.value > 0.02)
                    .map(pred => pred.name);

                setIdentifiedIngredients(prev => [...new Set([...prev, ...newIngredients])]);

                // Search recipes for each ingredient
                let allRecipes = [];
                for (const ingredient of newIngredients) {
                    const ingredientRecipes = await searchRecipesByIngredient(ingredient);
                    allRecipes = [...allRecipes, ...ingredientRecipes];
                }

                // Remove duplicates and get full details for top 5 recipes
                const uniqueRecipes = [...new Map(allRecipes.map(recipe => [recipe.idMeal, recipe])).values()];
                const topRecipes = uniqueRecipes.slice(0, 5);

                // Get full details for each recipe
                const recipesWithDetails = await Promise.all(
                    topRecipes.map(async (recipe) => {
                        const details = await getRecipeDetails(recipe.idMeal);
                        return {
                            name: details.strMeal,
                            image: details.strMealThumb,
                            ingredients: Array.from({ length: 20 }, (_, i) => ({
                                ingredient: details[`strIngredient${i + 1}`],
                                measure: details[`strMeasure${i + 1}`]
                            })).filter(item => item.ingredient),
                            instructions: details.strInstructions,
                            category: details.strCategory,
                            area: details.strArea
                        };
                    })
                );

                setRecipes(recipesWithDetails);
            } catch (error) {
                console.error('Error processing image:', error);
                setError('Failed to process image. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <div className="bg-blue-500 p-4 rounded-full">
                        <span className="text-3xl text-white">👨‍🍳</span>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Fridge to Feast
                </h1>
                <p className="text-gray-600 text-lg">
                    Transform your ingredients into delicious meals
                </p>
            </div>

            {/* Camera Button */}
            <div className="flex justify-center mb-12">
                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handlePhotoCapture}
                    ref={fileInputRef}
                    className="hidden"
                />
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-blue-500 text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
                    disabled={isLoading}
                >
                    <span className="text-xl">📷</span>
                    {isLoading ? 'Processing...' : 'Snap Ingredients'}
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
                <div className="flex justify-center mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            )}

            {/* Photo Gallery */}
            {photos.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Your Photos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Food item ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Identified Ingredients */}
            {identifiedIngredients.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Ingredients Found</h2>
                    <div className="flex flex-wrap gap-2">
                        {identifiedIngredients.map((ingredient, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                            >
                                {ingredient}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Recipe Suggestions */}
            {recipes.length > 0 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Recipe Suggestions</h2>
                    <div className="grid gap-6">
                        {recipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
                                        <p className="text-gray-600">{recipe.category} • {recipe.area}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.name}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />

                                    <div>
                                        <h4 className="font-semibold mb-2">Ingredients:</h4>
                                        <ul className="text-sm text-gray-600">
                                            {recipe.ingredients.slice(0, 5).map((item, idx) => (
                                                <li key={idx}>
                                                    {item.measure} {item.ingredient}
                                                </li>
                                            ))}
                                            {recipe.ingredients.length > 5 && (
                                                <li>And {recipe.ingredients.length - 5} more...</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-600 line-clamp-3">
                                    {recipe.instructions}
                                </p>

                                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                                    View Full Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}