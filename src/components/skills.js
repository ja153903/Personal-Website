import React, { Component } from 'react';

import SkillMeter from './skillmeter';

class Skills extends Component {

    render() {
        return (
            <div className="container">
                <h1>Skills Here</h1>
                <div id="languages">
                    <SkillMeter 
                        language={'Python'} 
                        comfortability={0.95} 
                        cssIDSelector={'python'}
                    />
                    
                    <SkillMeter 
                        language={'JavaScript'}
                        comfortability={0.9}
                        cssIDSelector={'javascript'}
                    />

                    <SkillMeter
                        language={'Java'}
                        comfortability={0.8}
                        cssIDSelector={'java'} 
                    />
                    
                    <SkillMeter 
                        language={'C++'}
                        comfortability={0.75}
                        cssIDSelector={'cpp'}
                    />
                </div>

                <div>
                    <SkillMeter 
                        language={'Node'}
                        comfortability={0.9}
                        cssIDSelector={'node-selector'}
                    />
                    
                    <SkillMeter 
                        language={'React'}
                        comfortability={0.9}
                        cssIDSelector={'react-selector'}
                    />

                    <SkillMeter 
                        language={'Redux'}
                        comfortability={0.85}
                        cssIDSelector={'redux-selector'}
                    />

                    <SkillMeter 
                        language={'Flask'}
                        comfortability={0.85}
                        cssIDSelector={'flask-selector'}
                    />
                </div>
            </div>
        )
    }
}

export default Skills;