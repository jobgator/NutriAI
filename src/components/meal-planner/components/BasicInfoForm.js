'use client';

// components/meal-planner/components/BasicInfoForm.js
import { FaUsers } from 'react-icons/fa';

const BasicInfoForm = ({ preferences, onChange }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
                <div className="inline-block p-3 bg-blue-100 rounded-full">
                    <FaUsers className="h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold mt-4">Tell Us About Your Household</h2>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-lg font-medium mb-2">
                        How many people are you cooking for?
                    </label>
                    <select
                        id="familySize"
                        name="familySize"
                        value={preferences.familySize}
                        onChange={onChange}
                        className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="1">Just me</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 or more</option>
                    </select>
                </div>

                <div>
                    <label className="block text-lg font-medium mb-2">
                        How much time do you have for cooking?
                    </label>
                    <select
                        id="cookingTime"
                        name="cookingTime"
                        value={preferences.cookingTime}
                        onChange={onChange}
                        className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="15">Quick meals (15 minutes)</option>
                        <option value="30">Medium (30 minutes)</option>
                        <option value="45">Relaxed cooking (45 minutes)</option>
                        <option value="60">I love cooking! (60+ minutes)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoForm;