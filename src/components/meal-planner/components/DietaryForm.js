'use client';

// components/meal-planner/components/DietaryForm.js
import { FaHeart } from 'react-icons/fa';

const DietaryForm = ({ preferences, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
                <div className="inline-block p-3 bg-blue-100 rounded-full">
                    <FaHeart className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold mt-4">Dietary Preferences</h2>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-lg font-medium mb-2">Diet Type</label>
                    <select
                        id="dietType"
                        name="dietType"
                        value={preferences.dietType}
                        onChange={onChange}
                        className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="balanced">Balanced</option>
                        <option value="lowCarb">Low Carb</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Keto</option>
                        <option value="mediterranean">Mediterranean</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2">
                        Any allergies or restrictions?
                    </label>
                    <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        placeholder="e.g., nuts, dairy, gluten"
                        value={preferences.allergies}
                        onChange={onChange}
                        className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2">
                        What foods do you enjoy?
                    </label>
                    <input
                        type="text"
                        id="foodPreferences"
                        name="foodPreferences"
                        placeholder="e.g., chicken, pasta, salads"
                        value={preferences.foodPreferences}
                        onChange={onChange}
                        className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default DietaryForm;