import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Default extends Component {
    render() {
        return (
            <div>
                <h3>About Me</h3>
                <p>
                    I'm currently a Master's student in Computer Science at New York University and full-stack JavaScript developer. 
                    Currently looking for summer internships in software engineering and web development.</p>
                <p>
                    Current: Software Engineer @ OneH Technologies Corp., Python Instructor @ Stack Inc.
                </p>
                <p>
                    Previous: Software Engineering Intern @ BNP Paribas Asset Management, Software Engineering Intern @ Gooroo, Python Developer @ Baruch College/Graduate Center
                </p>

                <Link to="http://www.github.com/ja153903" className="btn btn-social btn-github">
                    <span className="fa fa-github"></span> View some of my code at @ja153903
                </Link>

                <Link to="https://www.linkedin.com/in/jaime-louis-abbariao-972a1399/" className="btn btn-social btn-linkedin">
                    <span className="fa fa-linkedin"></span> Connect with me on LinkedIn
                </Link>
            </div>
        );
    }
}

export default Default;