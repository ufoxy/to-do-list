import React from 'react';

function Header({ children }) {
    return (
        <h1 style={{ color: '#000', userSelect: 'none' }}>
            {children}
        </h1>
    );
}

export default Header;