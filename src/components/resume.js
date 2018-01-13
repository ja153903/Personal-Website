import React, { Component } from 'react';

import Skills from './skills.js';

class Resume extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Resume here</h4>
                <Skills />
            </div>
        )
    }
}

export default Resume;