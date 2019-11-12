import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="h1" style={headerStyle}>
            <h1>TodoList</h1>
            <Link className="h5" to="/">Home</Link> | <Link className="h5" to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff'
}

export default Header;