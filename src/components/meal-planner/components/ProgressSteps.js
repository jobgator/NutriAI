'use client';

// components/meal-planner/components/ProgressSteps.js
import React from 'react';

const ProgressSteps = ({ currentStep }) => {
    return (
        <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${currentStep === step ? 'bg-blue-500 text-white' :
                                currentStep > step ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                            {step}
                        </div>
                        {step < 3 && (
                            <div className={`w-16 h-1 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'}`} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProgressSteps;