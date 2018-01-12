import React, { Component } from 'react';

const ProgressBar = require('progressbar.js');

class Resume extends Component {

    constructor(props) {
        super(props);
        this.createComfortabilityBar = this.createComfortabilityBar.bind(this);
    }

    componentDidMount() {
        this.createComfortabilityBar('Python', 0.9, '#python');
        this.createComfortabilityBar('JavaScript', 0.8, '#javascript');
    }

    createComfortabilityBar(language, comfortability, cssIDSelector) {
        const bar = new ProgressBar.Circle(cssIDSelector, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: 'black',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null,
            text: {
                value: language
            }
        });

        bar.animate(comfortability);
    }

    render() {
        return (
            <div>
                <h4>Resume here</h4>
                <div id="example">
                    Languages:
                    <div className="d-inline-block">
                        <div id="python"></div>
                    </div>
                    <div className="d-inline-block">
                        <div id="javascript"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;