import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${className || ''}`}
            ref={ref}
            {...props}
        />
    );
});

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;