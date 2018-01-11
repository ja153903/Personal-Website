import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Jaime Abbariao</h1>
                <Link to="/">Home</Link>{' | '}
                <Link to="/resume">Resume</Link>{' | '}
                <Link to="/blog">Blog</Link>
            </div>
        );
    }
}

export default Header;