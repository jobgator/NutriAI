'use client';

import React, { useState } from 'react';

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

    // ... rest of the component will follow in subsequent messages
};

export default MealPlanner;

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
                    cookTime: "10 mins"
                },
                {
                    name: "Lunch",
                    dish: "Sheet Pan Chicken Fajitas",
                    servings: preferences.familySize,
                    calories: 450,
                    cookTime: "25 mins"
                },
                {
                    name: "Dinner",
                    dish: "One-Pot Family Pasta",
                    servings: preferences.familySize,
                    calories: 550,
                    cookTime: "20 mins"
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
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #e6f2ff, white)'
    }}>
        <div style={{
            width: '90%',
            maxWidth: '800px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            background: 'white'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    color: '#1a202c',
                    marginBottom: '1rem'
                }}>
                    Welcome to AI Meal Planner
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#4a5568',
                    marginBottom: '2rem'
                }}>
                    Let's create your personalized meal plan in just a few steps.
                    We'll consider your family size, preferences, and dietary needs.
                </p>
                <button
                    onClick={() => {
                        setStarted(true);
                        setCurrentStep(1);
                    }}
                    style={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Get Started
                </button>
            </div>
        </div>
    </div>
);

const renderBasicInfo = () => (
    <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
        <h2 style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: '#1a202c'
        }}>
            Tell Us About Your Household
        </h2>

        {showTip && (
            <div style={{
                backgroundColor: '#ebf8ff',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center'
            }}>
                <span style={{ marginRight: '10px', color: '#3182ce' }}>ℹ️</span>
                <p style={{ color: '#2c5282' }}>
                    Tip: Your family size helps us adjust portion sizes and recipe quantities.
                </p>
            </div>
        )}

        <div style={{ marginBottom: '1rem' }}>
            <label
                htmlFor="familySize"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}
            >
                How many people are you cooking for?
            </label>
            <select
                id="familySize"
                name="familySize"
                value={preferences.familySize}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #cbd5e0',
                    borderRadius: '8px'
                }}
            >
                <option value="1">Just me</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 or more</option>
            </select>
        </div>

        <div>
            <label
                htmlFor="cookingTime"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}
            >
                How much time do you have for cooking?
            </label>
            <select
                id="cookingTime"
                name="cookingTime"
                value={preferences.cookingTime}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #cbd5e0',
                    borderRadius: '8px'
                }}
            >
                <option value="15">Quick meals (15 minutes)</option>
                <option value="30">Medium (30 minutes)</option>
                <option value="45">Relaxed cooking (45 minutes)</option>
                <option value="60">I love cooking! (60+ minutes)</option>
            </select>
        </div>
    </div>
);

const renderDietaryPreferences = () => (
    <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
        <h2 style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: '#1a202c'
        }}>
            Dietary Preferences
        </h2>

        <div style={{ marginBottom: '1rem' }}>
            <label
                htmlFor="dietType"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}
            >
                Diet Type
            </label>
            <select
                id="dietType"
                name="dietType"
                value={preferences.dietType}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #cbd5e0',
                    borderRadius: '8px'
                }}
            >
                <option value="balanced">Balanced</option>
                <option value="lowCarb">Low Carb</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
                <option value="mediterranean">Mediterranean</option>
            </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
            <label
                htmlFor="allergies"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}
            >
                Any allergies or restrictions?
            </label>
            <input
                id="allergies"
                name="allergies"
                placeholder="e.g., nuts, dairy, gluten"
                value={preferences.allergies}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #cbd5e0',
                    borderRadius: '8px'
                }}
            />
        </div>

        <div>
            <label
                htmlFor="foodPreferences"
                style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }}
            >
                What foods do you enjoy?
            </label>
            <input
                id="foodPreferences"
                name="foodPreferences"
                placeholder="e.g., chicken, pasta, salads"
                value={preferences.foodPreferences}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #cbd5e0',
                    borderRadius: '8px'
                }}
            />
        </div>
    </div>
);

const renderMealPlan = () => (
    <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
        <h2 style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            marginBottom: '1rem',
            color: '#1a202c'
        }}>
            Your Personalized Meal Plan
        </h2>
        <p style={{
            textAlign: 'center',
            fontSize: '1rem',
            marginBottom: '2rem',
            color: '#4a5568'
        }}>
            Perfect for {preferences.familySize} {parseInt(preferences.familySize) === 1 ? 'person' : 'people'}
        </p>

        {mealPlan?.meals.map((meal, index) => (
            <div
                key={index}
                style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                }}>
                    {meal.name}
                </h3>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: '#4a5568'
                }}>
                    {meal.dish}
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#f7fafc',
                    padding: '1rem',
                    borderRadius: '8px'
                }}>
                    <div>
                        <span style={{ fontWeight: 'bold', display: 'block', color: '#4a5568' }}>Serves</span>
                        {meal.servings}
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold', display: 'block', color: '#4a5568' }}>Calories</span>
                        {meal.calories}/serving
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold', display: 'block', color: '#4a5568' }}>Cook Time</span>
                        {meal.cookTime}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const renderProgress = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
    }}>
        {[1, 2, 3].map((step) => (
            <div
                key={step}
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: currentStep === step ? '#3182ce' :
                        currentStep > step ? '#48bb78' : '#e2e8f0',
                    color: currentStep === step || currentStep > step ? 'white' : 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 10px'
                }}
            >
                {step}
            </div>
        ))}
    </div>
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
    <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #e6f2ff, white)',
        padding: '2rem'
    }}>
        {currentStep > 0 && currentStep < 4 && renderProgress()}

        <div>{renderStep()}</div>

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
            maxWidth: '600px',
            margin: '2rem auto 0'
        }}>
            {currentStep > 1 && currentStep < 4 && (
                <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f7fafc',
                        border: '1px solid #cbd5e0',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Back
                </button>
            )}

            {currentStep < 2 && (
                <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginLeft: 'auto'
                    }}
                >
                    Next
                </button>
            )}

            {currentStep === 2 && (
                <button
                    onClick={generateMealPlan}
                    disabled={loading}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: loading ? '#cbd5e0' : '#3182ce',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        marginLeft: 'auto'
                    }}
                >
                    {loading ? 'Creating Your Plan...' : 'Generate Meal Plan'}
                </button>
            )}
        </div>
    </div>
);