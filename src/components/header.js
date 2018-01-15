import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid" id="header-parent">
                <h1 id="header-name">Jaime Abbariao</h1>

                <div id="header-links">
                    <Link to="/">Home</Link>{' | '}
                    <Link to="/resume">Resume</Link>{' | '}
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
        );
    }   
}

export default Header;