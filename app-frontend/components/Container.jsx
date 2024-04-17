import React from 'react';

const Container = ({classes, children}) => {
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Container;