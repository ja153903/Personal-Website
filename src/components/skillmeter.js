import React, { Component } from 'react';

const ProgressBar = require('progressbar.js');

class SkillMeter extends Component {

    constructor(props) {
        super(props);
        this.generateSkillMeter = this.generateSkillMeter.bind(this);
    }

    componentDidMount() {
        this.generateSkillMeter(this.props.language, this.props.comfortability, this.props.cssIDSelector);
    }

    generateSkillMeter(language, comfortability, cssIDSelector) {
        const bar = new ProgressBar.Circle(`#${cssIDSelector}`, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#3b5998',
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
            <div className="d-inline-block">
                <div id={this.props.cssIDSelector}></div>
            </div>
        )
    }
}

export default SkillMeter;