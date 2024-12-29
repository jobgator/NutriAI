import React from 'react';
import PropTypes from 'prop-types';

const buttonVariants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 hover:bg-gray-100',
};

const buttonSizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
};

function Button({
    children,
    variant = 'default',
    size = 'default',
    className,
    ...props
}) {
    const variantClass = buttonVariants[variant] || buttonVariants.default;
    const sizeClass = buttonSizes[size] || buttonSizes.default;

    return (
        <button
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none ${variantClass} ${sizeClass} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['default', 'outline']),
    size: PropTypes.oneOf(['default', 'sm', 'lg']),
    className: PropTypes.string,
};

export function Button({ children, ...props }) {
    return <button {...props}>{children}</button>;
}