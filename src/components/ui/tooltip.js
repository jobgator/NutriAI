import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TooltipProvider({ children }) {
    return <>{children}</>;
}

function Tooltip({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="relative"
        >
            {React.Children.map(children, child =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                        className: `${child.props.className || ''} cursor-help`
                    })
                    : child
            )}
        </div>
    );
}

function TooltipTrigger({ children }) {
    return <>{children}</>;
}

function TooltipContent({ children }) {
    return (
        <div
            className="absolute z-10 bg-black text-white text-xs rounded py-1 px-2 
      bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1"
        >
            {children}
        </div>
    );
}

TooltipProvider.propTypes = {
    children: PropTypes.node,
};

Tooltip.propTypes = {
    children: PropTypes.node,
};

TooltipTrigger.propTypes = {
    children: PropTypes.node,
};

TooltipContent.propTypes = {
    children: PropTypes.node,
};

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };