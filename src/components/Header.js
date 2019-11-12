import React from 'react';

function Header() {
    return (
        <header className="h1" style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff'
}

export default Header;