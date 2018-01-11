import React, { Component } from 'react';

var ProgressBar = require('progressbar.js');

class Resume extends Component {

    constructor(props) {
        super(props);
        this.createComfortabilityBar = this.createComfortabilityBar.bind(this);
    }

    componentDidMount() {
        this.createComfortabilityBar('Python', 0.9);
    }

    createComfortabilityBar(language, comfortability) {
        const bar = new ProgressBar.Circle('#example', {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: null,
            step: function(state, circle) {
                circle.setText(language);
            }
        });

        bar.animate(comfortability);
    }

    render() {
        return (
            <div>
                <h4>Resume here</h4>
                <div id="example"></div>
            </div>
        )
    }
}

export default Resume;