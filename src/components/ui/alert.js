import React from 'react';

const Alert = ({ message, type }) => {
    const alertType = type === 'error' ? 'alert-error' : 'alert-info';
    return (
        <div className={`alert ${alertType}`}>
            {message}
        </div>
    );
};

export default Alert;