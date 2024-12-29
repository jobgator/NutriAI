import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, className, ...props }) {
    return (
        <div
            className={`rounded-lg border bg-white shadow-lg ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
}

function CardHeader({ children, className, ...props }) {
    return (
        <div
            className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
}

function CardTitle({ children, className, ...props }) {
    return (
        <h3
            className={`text-2xl font-semibold ${className || ''}`}
            {...props}
        >
            {children}
        </h3>
    );
}

function CardDescription({ children, className, ...props }) {
    return (
        <p
            className={`text-sm text-gray-500 ${className || ''}`}
            {...props}
        >
            {children}
        </p>
    );
}

function CardContent({ children, className, ...props }) {
    return (
        <div
            className={`p-6 ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

CardHeader.propTypes = Card.propTypes;
CardTitle.propTypes = Card.propTypes;
CardDescription.propTypes = Card.propTypes;
CardContent.propTypes = Card.propTypes;

export { Card, CardHeader, CardTitle, CardDescription, CardContent };