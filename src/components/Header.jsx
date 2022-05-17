import React from 'react';

function Header({ children }) {
    return (
        <h1 style={{color: '#eee'}}>
            {children}
        </h1>
    );
}

export default Header;